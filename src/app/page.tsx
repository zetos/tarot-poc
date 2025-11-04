"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Select from "@/components/Select";
import ShuffleAnimation from "@/components/ShuffleAnimation";
import { readingQuestions } from "@/data/questions";
import { spreads } from "@/data/spreads";
import { useState } from "react";
import { saveReading } from "@/lib/reading-storage";
import type { ReadingResponse } from "@/types/tarot";

export default function Home() {
  const router = useRouter();
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedSpread, setSelectedSpread] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showShuffle, setShowShuffle] = useState(false);
  const [readingData, setReadingData] = useState<ReadingResponse | null>(null);

  const handleBeginReading = async () => {
    if (!selectedQuestion || !selectedSpread) {
      alert("Please select both a question and a spread to begin your reading.");
      return;
    }

    setIsLoading(true);
    setShowShuffle(true);

    try {
      const response = await fetch("/api/reading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: selectedQuestion,
          spreadId: selectedSpread,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("API Error:", error);
        setShowShuffle(false);
        setIsLoading(false);
        alert(`Error: ${error.error || "Failed to create reading"}`);
        return;
      }

      const data: ReadingResponse = await response.json();
      console.log("Reading Result:", data);
      setReadingData(data);
    } catch (error) {
      console.error("Failed to create reading:", error);
      setShowShuffle(false);
      setIsLoading(false);
      alert("An error occurred while creating your reading. Please try again.");
    }
  };

  const handleShuffleComplete = () => {
    if (readingData) {
      saveReading(readingData);
      router.push("/reading");
    }
  };

  const questionOptions = readingQuestions.map((q) => ({
    value: q.id,
    label: q.label,
  }));

  const spreadOptions = spreads.map((s) => ({
    value: s.id,
    label: s.name,
  }));

  const canBeginReading = selectedQuestion && selectedSpread;

  return (
    <>
      <AnimatePresence>
        {showShuffle && (
          <ShuffleAnimation onCompleteAction={handleShuffleComplete} />
        )}
      </AnimatePresence>

      <div className="font-sans min-h-screen flex items-center justify-center p-8 bg-mage-purple-950 text-mage-gold-700">
        <main className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="font-abbess text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-mage-gold-700">
            Mage: The Ascension
          </h1>
          <h2 className="font-visit text-2xl sm:text-3xl font-light mb-6 text-mage-gold-600">
            Tarot Reading
          </h2>
          <p className="text-base sm:text-lg text-mage-gold-500 max-w-xl mx-auto">
            Choose your question and spread to begin your journey through the cards
          </p>
        </div>

        <div className="bg-mage-purple-800/60 rounded-2xl p-8 sm:p-10 border border-mage-gold-800/30 shadow-lg shadow-mage-purple-900/50">
          <div className="space-y-6">
            <Select
              label="What guidance do you seek?"
              options={questionOptions}
              value={selectedQuestion}
              onChange={setSelectedQuestion}
              placeholder="Select a question"
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
                  {spreads.find((s) => s.id === selectedSpread)?.description}
                </p>
              </div>
            )}

            <button
              onClick={handleBeginReading}
              disabled={!canBeginReading || isLoading}
              className="w-full mt-8 py-4 px-6 rounded-lg font-medium text-base sm:text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-mage-gold-700 text-mage-purple-950 hover:bg-mage-gold-600 disabled:hover:bg-mage-gold-700"
            >
              {isLoading ? "Loading..." : "Begin Reading"}
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
