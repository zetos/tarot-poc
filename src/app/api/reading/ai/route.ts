import { tarotReadingAgent, tarotReadingSchema } from '@/agents/tarotAgent';
import { allCards } from '@/data/cards';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { formatReadingForAgent } from '@/lib/mastra-utils';
import { validateCustomQuestion } from '@/lib/validation';
import type { AIReadingRequest } from '@/types/tarot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env.local file.',
        },
        { status: 500 },
      );
    }

    const body: AIReadingRequest = await request.json();
    const { questionId, spreadId, cards, customQuestion } = body;

    if (!spreadId || !Array.isArray(cards) || cards.length === 0) {
      return NextResponse.json(
        {
          error:
            'Missing required fields: spreadId and cards are required',
        },
        { status: 400 },
      );
    }

    if (customQuestion !== undefined && typeof customQuestion !== 'string') {
      return NextResponse.json(
        { error: 'Invalid customQuestion' },
        { status: 400 },
      );
    }

    let validatedCustomQuestion: string | undefined;
    if (!questionId || questionId === 'custom') {
      const validation = validateCustomQuestion(customQuestion);
      if (!validation.success) {
        return NextResponse.json(
          { error: validation.error },
          { status: 400 },
        );
      }
      validatedCustomQuestion = validation.data;
    }

    if (!questionId && !validatedCustomQuestion) {
      return NextResponse.json(
        { error: 'Missing questionId or customQuestion' },
        { status: 400 },
      );
    }

    const question =
      questionId && questionId !== 'custom'
        ? readingQuestions.find((item) => item.id === questionId)
        : null;

    const effectiveQuestion = question || {
      id: 'custom',
      label: validatedCustomQuestion || 'Custom Question',
      description: 'A personal question asked by the seeker',
    };

    const spread = spreads.find((s) => s.id === spreadId);

    if (questionId && questionId !== 'custom' && !question) {
      return NextResponse.json(
        { error: 'Invalid questionId' },
        { status: 400 },
      );
    }

    if (!spread) {
      return NextResponse.json({ error: 'Invalid spreadId' }, { status: 400 });
    }

    if (cards.length !== spread.positions.length) {
      return NextResponse.json(
        {
          error: `Card count (${cards.length}) does not match spread positions (${spread.positions.length})`,
        },
        { status: 400 },
      );
    }

    const validCards = cards.every(
      (card) =>
        card &&
        typeof card.id === 'number' &&
        Number.isInteger(card.position) &&
        (card.orientation === 'upright' || card.orientation === 'reversed'),
    );

    if (!validCards) {
      return NextResponse.json({ error: 'Invalid cards' }, { status: 400 });
    }

    const positions = new Set(cards.map((card) => card.position));
    const cardIds = new Set(cards.map((card) => card.id));

    if (
      positions.size !== cards.length ||
      cardIds.size !== cards.length ||
      cards.some(
        (card) => card.position < 1 || card.position > spread.positions.length,
      )
    ) {
      return NextResponse.json({ error: 'Invalid cards' }, { status: 400 });
    }

    const canonicalCards = cards
      .map((drawnCard) => {
        const card = allCards.find(({ id }) => id === drawnCard.id);
        return card
          ? {
              ...card,
              orientation: drawnCard.orientation,
              position: drawnCard.position,
            }
          : null;
      })
      .sort((a, b) => (a?.position ?? 0) - (b?.position ?? 0));

    if (canonicalCards.some((card) => !card)) {
      return NextResponse.json({ error: 'Invalid cards' }, { status: 400 });
    }

    const verifiedCards = canonicalCards.filter((card) => card !== null);
    const prompt = formatReadingForAgent(
      verifiedCards,
      effectiveQuestion,
      spread,
    );

    const response = await tarotReadingAgent.generate(prompt, {
      structuredOutput: {
        schema: tarotReadingSchema,
      },
    });

    const drawnCardsByPosition = new Map(
      verifiedCards.map((card) => [card.position, card]),
    );

    for (const interpretation of response.object.cardInterpretations) {
      const drawnCard = drawnCardsByPosition.get(interpretation.position);

      if (!drawnCard) {
        throw new Error(
          `The reading returned an interpretation for position ${interpretation.position}, which was not in the drawn cards. Please try again.`,
        );
      }

      if (interpretation.cardId !== drawnCard.id) {
        throw new Error(
          `Card mismatch at position ${interpretation.position}. Expected ${drawnCard.name} (ID: ${drawnCard.id}), but got ${interpretation.cardName} (ID: ${interpretation.cardId}). Please try again.`,
        );
      }

      if (interpretation.orientation !== drawnCard.orientation) {
        throw new Error(
          `Orientation mismatch at position ${interpretation.position} for ${drawnCard.name}. Expected ${drawnCard.orientation}, but got ${interpretation.orientation}. Please try again.`,
        );
      }
    }

    return NextResponse.json(response.object);
  } catch (error) {
    console.error('Error in AI reading API:', error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred while generating the AI reading';

    return NextResponse.json(
      { error: `Granny couldn't complete the reading. ${errorMessage}` },
      { status: 500 },
    );
  }
}
