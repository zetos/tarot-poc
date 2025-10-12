import { allCards } from '@/data/cards';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { drawCards } from '@/lib/tarot-utils';
import type { ReadingRequest, ReadingResponse } from '@/types/tarot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body: ReadingRequest = await request.json();
    const { questionId, spreadId } = body;

    if (!questionId || !spreadId) {
      return NextResponse.json(
        { error: 'Missing questionId or spreadId' },
        { status: 400 }
      );
    }

    const question = readingQuestions.find((q) => q.id === questionId);
    const spread = spreads.find((s) => s.id === spreadId);

    if (!question) {
      return NextResponse.json(
        { error: 'Invalid questionId' },
        { status: 400 }
      );
    }

    if (!spread) {
      return NextResponse.json({ error: 'Invalid spreadId' }, { status: 400 });
    }

    const cardCount = spread.positions.length;
    const drawnCards = drawCards(allCards, cardCount);

    const response: ReadingResponse = {
      questionId,
      spreadId,
      cards: drawnCards,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in reading API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
