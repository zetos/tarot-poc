"use client";

import AIInterpretation from "@/components/AIInterpretation";
import CardDetails from "@/components/CardDetails";
import CelticCrossLayout from "@/components/CelticCrossLayout";
import CircularSpread12Layout from "@/components/CircularSpread12Layout";
import CircularSpread7Layout from "@/components/CircularSpread7Layout";
import { readingQuestions } from "@/data/questions";
import { spreads } from "@/data/spreads";
import { clearReading, getReading } from "@/lib/reading-storage";
import type { AIReadingResponse, DrawnCard, ReadingResponse, SpreadPosition } from "@/types/tarot";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReadingPage() {
  const router = useRouter();
  const [reading, setReading] = useState<ReadingResponse | null>(null);
  const [selectedCard, setSelectedCard] = useState<DrawnCard | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<SpreadPosition | null>(null);
  const [aiInterpretation, setAiInterpretation] = useState<string | null>(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  useEffect(() => {
    const data = getReading();
    if (!data) {
      router.push("/");
      return;
    }
    setReading(data);
  }, [router]);

  if (!reading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mage-purple-950">
        <p className="text-mage-gold-600">Loading your reading...</p>
      </div>
    );
  }

  const spread = spreads.find((s) => s.id === reading.spreadId);
  const question = readingQuestions.find((q) => q.id === reading.questionId);

  if (!spread || !question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mage-purple-950">
        <p className="text-mage-gold-600">Invalid reading data</p>
      </div>
    );
  }

  const handleCardClick = (card: DrawnCard, position: SpreadPosition) => {
    setSelectedCard(card);
    setSelectedPosition(position);
  };

  const handleCloseDetails = () => {
    setSelectedCard(null);
    setSelectedPosition(null);
  };

  const handleNewReading = () => {
    clearReading();
    router.push("/");
  };

  const handleGetAIReading = async () => {
    if (!reading) return;

    setIsLoadingAI(true);
    setAiError(null);

    try {
      const response = await fetch("/api/reading/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: reading.questionId,
          spreadId: reading.spreadId,
          cards: reading.cards,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to generate AI reading");
      }

      const data: AIReadingResponse = await response.json();
      setAiInterpretation(data.interpretation);
    } catch (error) {
      setAiError(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
    } finally {
      setIsLoadingAI(false);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-mage-purple-950 text-mage-gold-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-abbess text-3xl sm:text-4xl font-bold mb-3 text-mage-gold-700">
            {spread.name}
          </h1>
          <p className="font-visit text-lg sm:text-xl text-mage-gold-600 mb-2">
            {question.label}
          </p>
          <p className="text-sm text-mage-gold-500">{question.description}</p>
        </div>

        <div className="mb-8">
          {spread.id === "celtic-cross" && (
            <CelticCrossLayout
              cards={reading.cards}
              spreadPositions={spread.positions}
              onCardClick={handleCardClick}
            />
          )}
          {spread.id === "circular-7-weekly" && (
            <CircularSpread7Layout
              cards={reading.cards}
              spreadPositions={spread.positions}
              onCardClick={handleCardClick}
            />
          )}
          {spread.id === "circular-12-yearly" && (
            <CircularSpread12Layout
              cards={reading.cards}
              spreadPositions={spread.positions}
              onCardClick={handleCardClick}
            />
          )}
        </div>

        {!aiInterpretation && !isLoadingAI && (
          <div className="text-center mt-8">
            <button
              onClick={handleGetAIReading}
              className="px-8 py-4 bg-mage-gold-700 text-mage-purple-950 rounded-lg font-medium text-lg hover:bg-mage-gold-600 transition-colors shadow-lg"
            >
              Get AI Reading
            </button>
            <p className="text-sm text-mage-gold-500 mt-3">
              Receive an interpretation from Granny
            </p>
          </div>
        )}

        <AIInterpretation
          interpretation={aiInterpretation}
          isLoading={isLoadingAI}
          error={aiError}
          onRetry={handleGetAIReading}
        />

        <div className="text-center mt-8">
          <button
            onClick={handleNewReading}
            className="px-6 py-3 bg-mage-gold-700 text-mage-purple-950 rounded-lg font-medium hover:bg-mage-gold-600 transition-colors"
          >
            New Reading
          </button>
        </div>
      </div>

      <CardDetails
        card={selectedCard}
        orientation={selectedCard?.orientation || "upright"}
        positionInfo={selectedPosition}
        onCloseAction={handleCloseDetails}
      />
    </div>
  );
}
