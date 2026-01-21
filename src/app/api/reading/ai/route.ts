import { tarotReadingAgent, tarotReadingSchema } from '@/agents/tarotAgent';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { formatReadingForAgent } from '@/lib/mastra-utils';
import type { AIReadingRequest, AIReadingResponse } from '@/types/tarot';
import { NextResponse } from 'next/server';

/**
 * Handle POST requests to generate an AI tarot reading interpretation.
 *
 * Validates the request body (expects `questionId`, `spreadId`, and `cards`), ensures the chosen question and spread exist and the card count matches the spread, formats a prompt for the tarot agent, and returns the agent's interpretation or a JSON error with an appropriate HTTP status.
 *
 * @param request - Incoming HTTP request whose JSON body must conform to `AIReadingRequest` (contains `questionId`, `spreadId`, and `cards`).
 * @returns A NextResponse containing `AIReadingResponse` with `{ interpretation: string }` on success, or a JSON error object `{ error: string }` with an appropriate HTTP status on failure.
 */
export async function POST(request: Request) {
  try {
    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env.local file.',
        },
        { status: 500 }
      );
    }

    // Parse request body
    const body: AIReadingRequest = await request.json();
    const { questionId, spreadId, cards, customQuestion } = body;

    // Validate required fields
    if (!spreadId || !cards || cards.length === 0) {
      return NextResponse.json(
        {
          error:
            'Missing required fields: spreadId and cards are required',
        },
        { status: 400 }
      );
    }

    // Validate that we have either a valid questionId or customQuestion
    if (!questionId && !customQuestion) {
      return NextResponse.json(
        { error: 'Missing questionId or customQuestion' },
        { status: 400 }
      );
    }

    // Find question or create synthetic question for custom inputs
    const question = questionId && questionId !== 'custom' 
      ? readingQuestions.find((q) => q.id === questionId)
      : null;

    // Create synthetic question object for custom questions
    const effectiveQuestion = question || {
      id: 'custom',
      label: customQuestion || 'Custom Question',
      description: 'A personal question asked by the seeker',
    };

    const spread = spreads.find((s) => s.id === spreadId);

    if (questionId && questionId !== 'custom' && !question) {
      return NextResponse.json(
        { error: 'Invalid questionId' },
        { status: 400 }
      );
    }

    if (!spread) {
      return NextResponse.json({ error: 'Invalid spreadId' }, { status: 400 });
    }

    // Validate card count matches spread positions
    if (cards.length !== spread.positions.length) {
      return NextResponse.json(
        {
          error: `Card count (${cards.length}) does not match spread positions (${spread.positions.length})`,
        },
        { status: 400 }
      );
    }

    // Format the reading for the AI agent
    const prompt = formatReadingForAgent(cards, effectiveQuestion, spread);

    // Generate the interpretation using Mastra agent with structured output
    const response = await tarotReadingAgent.generate(prompt, {
      structuredOutput: {
        schema: tarotReadingSchema,
      },
    });

    // Validate response structure
    if (
      !response ||
      !response.object ||
      !response.object.cardInterpretations ||
      !response.object.overallReading ||
      !response.object.closingAdvice
    ) {
      throw new Error('The reading could not be completed. Please try again.');
    }

    // Validate that AI's card interpretations match the actual drawn cards at each position
    const drawnCardsByPosition = new Map(cards.map((card) => [card.position, card]));

    for (const interpretation of response.object.cardInterpretations) {
      const drawnCard = drawnCardsByPosition.get(interpretation.position);

      if (!drawnCard) {
        throw new Error(
          `The reading returned an interpretation for position ${interpretation.position}, which was not in the drawn cards. Please try again.`
        );
      }

      if (interpretation.cardId !== drawnCard.id) {
        throw new Error(
          `Card mismatch at position ${interpretation.position}. Expected ${drawnCard.name} (ID: ${drawnCard.id}), but got ${interpretation.cardName} (ID: ${interpretation.cardId}). Please try again.`
        );
      }

      if (interpretation.orientation !== drawnCard.orientation) {
        throw new Error(
          `Orientation mismatch at position ${interpretation.position} for ${drawnCard.name}. Expected ${drawnCard.orientation}, but got ${interpretation.orientation}. Please try again.`
        );
      }
    }

    // Build response
    const aiResponse: AIReadingResponse = {
      cardInterpretations: response.object.cardInterpretations,
      overallReading: response.object.overallReading,
      closingAdvice: response.object.closingAdvice,
      // Future: Include token usage for cost tracking
      // usage: response.usage ? {
      //   promptTokens: response.usage.promptTokens,
      //   completionTokens: response.usage.completionTokens,
      //   totalTokens: response.usage.totalTokens,
      // } : undefined,
    };

    return NextResponse.json(aiResponse);
  } catch (error) {
    console.error('Error in AI reading API:', error);

    // Provide helpful error message
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred while generating the AI reading';

    return NextResponse.json(
      { error: `Granny couldn't complete the reading. ${errorMessage}` },
      { status: 500 }
    );
  }
}
