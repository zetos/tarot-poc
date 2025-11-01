"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";

type CardDetailsProps = {
  card: DrawnCard | null;
  positionInfo: SpreadPosition | null;
  onClose: () => void;
};

export default function CardDetails({
  card,
  positionInfo,
  onClose,
}: CardDetailsProps) {
  const [imageError, setImageError] = useState(false);

  if (!card || !positionInfo) return null;

  const isReversed = card.orientation === "reversed";
  const meaning = isReversed ? card.reversedMeaning : card.uprightMeaning;

  const getElementColor = (element: string) => {
    switch (element) {
      case 'fire':
        return 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400';
      case 'water':
        return 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'air':
        return 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400';
      case 'earth':
        return 'border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400';
      default:
        return 'border-foreground/20 bg-foreground/10';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-background border border-black/[.1] dark:border-white/[.2] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {card.name}
              </h2>
              <p className="text-sm text-foreground/60 mb-3">
                {isReversed ? "Reversed" : "Upright"}
              </p>
              {card.suit && (
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize ${getElementColor(card.suit.element)}`}>
                    {card.suit.essence}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-foreground/20 bg-foreground/5 capitalize">
                    {card.suit.faction}
                  </span>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize ${getElementColor(card.suit.element)}`}>
                    {card.suit.element}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-foreground/20 bg-foreground/5 capitalize">
                    {card.suit.tarotSuit}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-foreground/60 hover:text-foreground transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div
                className={`relative w-80 h-[32rem] sm:w-96 sm:h-[36rem] bg-foreground/[0.05] dark:bg-white/[0.08] rounded-lg border-2 border-black/[.1] dark:border-white/[.2] overflow-hidden ${
                  isReversed ? "rotate-180" : ""
                }`}
              >
                {!imageError ? (
                  <Image
                    src={card.imagePath}
                    alt={card.name}
                    fill
                    className="object-contain"
                    onError={() => setImageError(true)}
                    sizes="(max-width: 640px) 320px, 384px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <p className="font-bold text-base mb-2 text-center">
                      {card.name}
                    </p>
                    <p className="text-sm text-foreground/60 text-center">
                      Image not available
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-foreground/[0.03] dark:bg-white/[0.05] rounded-lg p-4 border border-black/[.05] dark:border-white/[.1]">
              <h3 className="font-semibold mb-2 text-sm text-foreground/80">
                Position {positionInfo.position}: {positionInfo.name}
              </h3>
              <p className="text-sm text-foreground/70">
                {positionInfo.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Meaning</h3>
              <p className="text-foreground/80 leading-relaxed">{meaning}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {card.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-foreground/[0.08] dark:bg-white/[0.1] rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 py-3 px-6 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}
