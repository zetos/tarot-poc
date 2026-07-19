'use client';

import AIInterpretation from '@/components/AIInterpretation';
import CardDetails from '@/components/CardDetails';
import CelticCrossLayout from '@/components/CelticCrossLayout';
import CircularSpread12Layout from '@/components/CircularSpread12Layout';
import CircularSpread7Layout from '@/components/CircularSpread7Layout';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { clearReading, getReading } from '@/lib/reading-storage';
import type {
  AIReadingResponse,
  DrawnCard,
  ReadingResponse,
  SpreadPosition,
} from '@/types/tarot';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
export default function ReadingPage() {
  const router = useRouter();
  const [reading, setReading] = useState<ReadingResponse | null>(null);
  const [selection, setSelection] = useState<{
    card: DrawnCard;
    position: SpreadPosition;
  } | null>(null);
  const [aiInterpretation, setAiInterpretation] =
    useState<AIReadingResponse | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const data = getReading();
    if (!data) {
      router.push('/');
      return;
    }
    setReading(data);
  }, [router]);

  useEffect(() => () => abortControllerRef.current?.abort(), []);

  if (!reading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mage-purple-950 relative">
        <p className="text-mage-gold-600">Loading your reading...</p>
      </div>
    );
  }

  const spread = spreads.find((s) => s.id === reading.spreadId);
  const predefinedQuestion = readingQuestions.find(
    (q) => q.id === reading.questionId,
  );
  const isCustomQuestion =
    reading.questionId === 'custom' || !predefinedQuestion;
  const displayQuestion = isCustomQuestion
    ? { label: reading.customQuestion || 'Custom Question', description: '' }
    : predefinedQuestion;

  if (!spread || !displayQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mage-purple-950">
        <p className="text-mage-gold-600">Invalid reading data</p>
      </div>
    );
  }

  const handleCardClick = (card: DrawnCard, position: SpreadPosition) => {
    setSelection({ card, position });
  };

  const handleNewReading = () => {
    clearReading();
    router.push('/');
  };

  const handleGetAIReading = async () => {
    setIsLoadingAI(true);
    setAiError(null);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const timeoutId = setTimeout(() => abortController.abort(), 90000); // 90 second timeout

    try {
      const response = await fetch('/api/reading/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: reading.questionId,
          spreadId: reading.spreadId,
          cards: reading.cards,
          customQuestion: reading.customQuestion,
        }),
        signal: abortController.signal,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'The reading could not be completed');
      }

      const data: AIReadingResponse = await response.json();
      setAiInterpretation(data);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        setAiError('The reading took too long to complete. Please try again.');
      } else {
        setAiError(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred. Please try again.',
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setIsLoadingAI(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-8 bg-mage-purple-950 text-mage-gold-700 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-abbess text-3xl sm:text-4xl font-bold mb-3 text-mage-gold-700">
            {spread.name}
          </h1>
          <p className="font-visit text-lg sm:text-xl text-mage-gold-600 mb-2">
            {displayQuestion.label}
          </p>
          {displayQuestion.description && (
            <p className="text-sm text-mage-gold-500">
              {displayQuestion.description}
            </p>
          )}
        </div>

        <div className="mb-8">
          {spread.id === 'celtic-cross' && (
            <CelticCrossLayout
              cards={reading.cards}
              spreadPositions={spread.positions}
              onCardClick={handleCardClick}
            />
          )}
          {spread.id === 'circular-7-weekly' && (
            <CircularSpread7Layout
              cards={reading.cards}
              spreadPositions={spread.positions}
              onCardClick={handleCardClick}
            />
          )}
          {spread.id === 'circular-12-yearly' && (
            <CircularSpread12Layout
              cards={reading.cards}
              spreadPositions={spread.positions}
              onCardClick={handleCardClick}
            />
          )}
        </div>

        <AIInterpretation
          interpretation={aiInterpretation}
          isLoading={isLoadingAI}
          error={aiError}
          onRetry={handleGetAIReading}
          drawnCards={reading.cards}
        />

        {/* Modern Action Bar - Side-by-side button layout */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-mage-purple-800/40 backdrop-blur-sm border border-mage-gold-800/30 rounded-xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* Primary Action - Consult Granny (only show if no interpretation yet) */}
              {!aiInterpretation && !isLoadingAI && (
                <button
                  onClick={handleGetAIReading}
                  className="flex-1 px-8 py-4 bg-mage-gold-700 text-mage-purple-950 rounded-lg font-semibold text-lg hover:bg-mage-gold-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-mage-gold-600 focus:outline-none cursor-pointer"
                >
                  Consult Granny
                </button>
              )}

              {/* Secondary Action - New Reading (always visible) */}
              <button
                onClick={handleNewReading}
                className={`${!aiInterpretation && !isLoadingAI ? 'flex-1' : 'w-full'} px-8 py-4 border-2 border-mage-gold-700 text-mage-gold-700 bg-transparent rounded-lg font-semibold text-lg hover:bg-mage-gold-700/10 hover:shadow-lg hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-mage-gold-600 focus:outline-none cursor-pointer group`}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-xl group-hover:rotate-180 transition-transform duration-500">
                    ↻
                  </span>
                  <span>New Reading</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CardDetails
        card={selection?.card ?? null}
        orientation={selection?.card.orientation ?? 'upright'}
        positionInfo={selection?.position ?? null}
        onCloseAction={() => setSelection(null)}
      />
    </div>
  );
}
