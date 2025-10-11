"use client";

import Select from "@/components/Select";
import { readingQuestions } from "@/data/questions";
import { spreads } from "@/data/spreads";
import { useState } from "react";

export default function Home() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedSpread, setSelectedSpread] = useState("");

  const handleBeginReading = () => {
    if (!selectedQuestion || !selectedSpread) {
      alert("Please select both a question and a spread to begin your reading.");
      return;
    }
    alert(`Starting reading with: ${selectedQuestion} using ${selectedSpread} spread`);
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
    <div className="font-sans min-h-screen flex items-center justify-center p-8 bg-background text-foreground">
      <main className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Mage: The Ascension
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light mb-6 text-foreground/80">
            Tarot Reading
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-xl mx-auto">
            Choose your question and spread to begin your journey through the cards
          </p>
        </div>

        <div className="bg-foreground/[0.03] dark:bg-white/[0.05] rounded-2xl p-8 sm:p-10 border border-black/[.08] dark:border-white/[.145] shadow-lg">
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
              <div className="mt-4 p-4 rounded-lg bg-background/50 border border-black/[.05] dark:border-white/[.1]">
                <p className="text-sm text-foreground/70">
                  {spreads.find((s) => s.id === selectedSpread)?.description}
                </p>
              </div>
            )}

            <button
              onClick={handleBeginReading}
              disabled={!canBeginReading}
              className="w-full mt-8 py-4 px-6 rounded-lg font-medium text-base sm:text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-foreground text-background hover:bg-foreground/90 disabled:hover:bg-foreground"
            >
              Begin Reading
            </button>
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-foreground/50">
          <p>A journey through the Mage: The Ascension tarot deck</p>
        </footer>
      </main>
    </div>
  );
}
