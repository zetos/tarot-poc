"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CelticCrossLayout from "@/components/CelticCrossLayout";
import CircularSpread7Layout from "@/components/CircularSpread7Layout";
import CircularSpread12Layout from "@/components/CircularSpread12Layout";
import CardDetails from "@/components/CardDetails";
import { getReading, clearReading } from "@/lib/reading-storage";
import { spreads } from "@/data/spreads";
import { readingQuestions } from "@/data/questions";
import type { ReadingResponse, DrawnCard, SpreadPosition } from "@/types/tarot";

export default function ReadingPage() {
  const router = useRouter();
  const [reading, setReading] = useState<ReadingResponse | null>(null);
  const [selectedCard, setSelectedCard] = useState<DrawnCard | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<SpreadPosition | null>(null);

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

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-mage-purple-950 text-mage-gold-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-mage-gold-700">
            {spread.name}
          </h1>
          <p className="text-lg sm:text-xl text-mage-gold-600 mb-2">
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

        <div className="text-center">
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
        positionInfo={selectedPosition}
        onCloseAction={handleCloseDetails}
      />
    </div>
  );
}
