import { allCards } from '@/data/cards';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { drawCards } from '@/lib/tarot-utils';
import {
  validateCustomQuestion,
  createErrorResponse,
} from '@/lib/validation';
import type { ReadingRequest, ReadingResponse } from '@/types/tarot';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body: ReadingRequest = await request.json();
    const { questionId, spreadId, customQuestion } = body;

    if ((!questionId || questionId === 'custom') && !customQuestion) {
      return NextResponse.json(createErrorResponse('Missing questionId or customQuestion'));
    }

    if (!spreadId) {
      return NextResponse.json(createErrorResponse('Missing spreadId'));
    }

    let validatedCustomQuestion: string | undefined;

    if (customQuestion) {
      const validation = validateCustomQuestion(customQuestion);
      if (!validation.success) {
        return NextResponse.json(createErrorResponse(validation.errors[0].message));
      }
      validatedCustomQuestion = validation.data;
    }

    const question = questionId && questionId !== 'custom'
      ? readingQuestions.find((q) => q.id === questionId)
      : null;
    const spread = spreads.find((s) => s.id === spreadId);

    if (questionId && questionId !== 'custom' && !question) {
      return NextResponse.json(createErrorResponse('Invalid questionId'));
    }

    if (!spread) {
      return NextResponse.json(createErrorResponse('Invalid spreadId'));
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
      createErrorResponse('Internal server error', 500)
    );
  }
}
