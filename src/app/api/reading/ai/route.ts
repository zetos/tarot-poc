import { NextResponse } from 'next/server';
import { tarotReadingAgent } from '@/agents/tarotAgent';
import { formatReadingForAgent } from '@/lib/mastra-utils';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import type { AIReadingRequest, AIReadingResponse } from '@/types/tarot';

export async function POST(request: Request) {
  try {
    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env.local file.' },
        { status: 500 }
      );
    }

    // Parse request body
    const body: AIReadingRequest = await request.json();
    const { questionId, spreadId, cards } = body;

    // Validate required fields
    if (!questionId || !spreadId || !cards || cards.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields: questionId, spreadId, and cards are required' },
        { status: 400 }
      );
    }

    // Find question and spread
    const question = readingQuestions.find((q) => q.id === questionId);
    const spread = spreads.find((s) => s.id === spreadId);

    if (!question) {
      return NextResponse.json(
        { error: 'Invalid questionId' },
        { status: 400 }
      );
    }

    if (!spread) {
      return NextResponse.json(
        { error: 'Invalid spreadId' },
        { status: 400 }
      );
    }

    // Validate card count matches spread positions
    if (cards.length !== spread.positions.length) {
      return NextResponse.json(
        { error: `Card count (${cards.length}) does not match spread positions (${spread.positions.length})` },
        { status: 400 }
      );
    }

    // Format the reading for the AI agent
    const prompt = formatReadingForAgent(cards, question, spread);

    console.log('Generating AI reading with prompt length:', prompt.length);

    // Generate the interpretation using Mastra agent
    const response = await tarotReadingAgent.generate(prompt);

    console.log('AI reading generated successfully');
    console.log('Token usage:', response.usage);

    // Build response
    const aiResponse: AIReadingResponse = {
      interpretation: response.text,
    };

    return NextResponse.json(aiResponse);
  } catch (error) {
    console.error('Error in AI reading API:', error);
    
    // Provide helpful error message
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'An unknown error occurred while generating the AI reading';

    return NextResponse.json(
      { error: `Failed to generate AI reading: ${errorMessage}` },
      { status: 500 }
    );
  }
}
