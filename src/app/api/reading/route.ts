import { allCards } from '@/data/cards';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { drawCards } from '@/lib/tarot-utils';
import { validateCustomQuestion } from '@/lib/validation';
import type { ReadingRequest, ReadingResponse } from '@/types/tarot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body: ReadingRequest = await request.json();
    const { questionId, spreadId, customQuestion } = body;

    if (customQuestion !== undefined && typeof customQuestion !== 'string') {
      return NextResponse.json(
        { error: 'Invalid customQuestion' },
        { status: 400 },
      );
    }

    if ((!questionId || questionId === 'custom') && !customQuestion) {
      return NextResponse.json(
        { error: 'Missing questionId or customQuestion' },
        { status: 400 },
      );
    }

    if (!spreadId) {
      return NextResponse.json({ error: 'Missing spreadId' }, { status: 400 });
    }

    let validatedCustomQuestion: string | undefined;

    if (customQuestion) {
      const validation = validateCustomQuestion(customQuestion);
      if (!validation.success) {
        return NextResponse.json(
          { error: validation.error },
          { status: 400 },
        );
      }
      validatedCustomQuestion = validation.data;
    }

    const question =
      questionId && questionId !== 'custom'
        ? readingQuestions.find((q) => q.id === questionId)
        : null;
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

    const cardCount = spread.positions.length;
    const drawnCards = drawCards(allCards, cardCount);

    const response: ReadingResponse = {
      questionId: questionId || 'custom',
      spreadId,
      cards: drawnCards,
      customQuestion: validatedCustomQuestion,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in reading API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
