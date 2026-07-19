'use client';

import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import QuestionInput from '@/components/QuestionInput';
import Select from '@/components/Select';
import ShuffleAnimation from '@/components/ShuffleAnimation';
import { readingQuestions } from '@/data/questions';
import { spreads } from '@/data/spreads';
import { saveReading } from '@/lib/reading-storage';
import type { ReadingResponse } from '@/types/tarot';

const questionOptions = readingQuestions.map(({ id, label }) => ({
  value: id,
  label,
}));
const spreadOptions = spreads.map(({ id, name }) => ({
  value: id,
  label: name,
}));

export default function Home() {
  const router = useRouter();
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [selectedSpread, setSelectedSpread] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showShuffle, setShowShuffle] = useState(false);
  const shuffleCompleteRef = useRef<(() => void) | null>(null);
  const selectedSpreadData = spreads.find(({ id }) => id === selectedSpread);

  const handleBeginReading = async () => {
    const effectiveQuestionId = customQuestion.trim() ? '' : selectedQuestion;
    const effectiveCustomQuestion = customQuestion.trim() || undefined;

    if (!effectiveQuestionId && !effectiveCustomQuestion) {
      alert('Please select a question or type your own to begin your reading.');
      return;
    }

    if (!selectedSpread) {
      alert('Please select a spread to begin your reading.');
      return;
    }

    setIsLoading(true);
    setShowShuffle(true);
    const shuffleComplete = new Promise<void>((resolve) => {
      shuffleCompleteRef.current = resolve;
    });

    try {
      const response = await fetch('/api/reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: effectiveQuestionId || 'custom',
          spreadId: selectedSpread,
          customQuestion: effectiveCustomQuestion,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create reading');
      }

      const data: ReadingResponse = await response.json();
      await shuffleComplete;
      saveReading(data);
      router.push('/reading');
    } catch (error) {
      console.error('Failed to create reading:', error);
      setShowShuffle(false);
      setIsLoading(false);
      alert(
        error instanceof Error
          ? error.message
          : 'An error occurred while creating your reading. Please try again.',
      );
    } finally {
      shuffleCompleteRef.current = null;
    }
  };

  const canBeginReading = Boolean(
    (selectedQuestion || customQuestion.trim()) && selectedSpread,
  );

  return (
    <>
      <AnimatePresence>
        {showShuffle && (
          <ShuffleAnimation
            cardCount={selectedSpreadData?.positions.length || 10}
            onCompleteAction={() => shuffleCompleteRef.current?.()}
          />
        )}
      </AnimatePresence>

      <div className="font-sans min-h-screen flex items-center justify-center p-8 bg-mage-purple-950 text-mage-gold-700 relative">
        <main className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <h1 className="font-abbess text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-mage-gold-700">
              Mage: The Ascension
            </h1>
            <h2 className="font-visit text-2xl sm:text-3xl font-light mb-6 text-mage-gold-600">
              Tarot Reading
            </h2>
            <p className="text-base sm:text-lg text-mage-gold-500 max-w-xl mx-auto">
              Choose your question and spread to begin your journey through the
              cards
            </p>
          </div>

          <div className="bg-mage-purple-800/60 rounded-2xl p-8 sm:p-10 border border-mage-gold-800/30 shadow-lg shadow-mage-purple-900/50">
            <div className="space-y-6">
              <QuestionInput
                label="What guidance do you seek?"
                options={questionOptions}
                value={selectedQuestion}
                onChangeQuestionId={setSelectedQuestion}
                customQuestion={customQuestion}
                onChangeCustomQuestion={setCustomQuestion}
                placeholder="Select a question"
                customPlaceholder="Type your question here..."
              />

              <Select
                label="Choose your reading spread"
                options={spreadOptions}
                value={selectedSpread}
                onChange={setSelectedSpread}
                placeholder="Select a spread"
              />

              {selectedSpread && (
                <div className="mt-4 p-4 rounded-lg bg-mage-purple-900/40 border border-mage-gold-800/20">
                  <p className="text-sm text-mage-gold-500">
                    {selectedSpreadData?.description}
                  </p>
                </div>
              )}

              <button
                onClick={handleBeginReading}
                disabled={!canBeginReading || isLoading}
                className="w-full mt-8 py-4 px-6 rounded-lg font-medium text-base sm:text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-mage-gold-700 text-mage-purple-950 hover:bg-mage-gold-600 disabled:hover:bg-mage-gold-700"
              >
                {isLoading ? 'Loading...' : 'Begin Reading'}
              </button>
            </div>
          </div>

          <footer className="mt-12 text-center text-sm text-mage-gold-600/60">
            <p>A journey through the Mage: The Ascension tarot deck</p>
          </footer>
        </main>
      </div>
    </>
  );
}
