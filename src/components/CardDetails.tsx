"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";

type CardDetailsProps = {
  card: DrawnCard | null;
  positionInfo: SpreadPosition | null;
  onCloseAction: () => void;
};

export default function CardDetails({
  card,
  positionInfo,
  onCloseAction,
}: CardDetailsProps) {
  const [imageError, setImageError] = useState(false);

  if (!card || !positionInfo) return null;

  const isReversed = card.orientation === "reversed";
  const meaning = isReversed ? card.reversedMeaning : card.uprightMeaning;

  const getElementColor = (element: string) => {
    switch (element) {
      case 'fire':
        return 'border-red-400/40 bg-red-500/20 text-red-300';
      case 'water':
        return 'border-blue-400/40 bg-blue-500/20 text-blue-300';
      case 'air':
        return 'border-cyan-400/40 bg-cyan-500/20 text-cyan-300';
      case 'earth':
        return 'border-green-400/40 bg-green-500/20 text-green-300';
      default:
        return 'border-mage-gold-700/30 bg-mage-gold-900/20 text-mage-gold-500';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-mage-purple-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onCloseAction}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-mage-purple-800 border border-mage-gold-700/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-mage-gold-700">
                {card.name}
              </h2>
              <p className="text-sm text-mage-gold-600 mb-3">
                {isReversed ? "Reversed" : "Upright"}
              </p>
              {card.suit && (
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize ${getElementColor(card.suit.element)}`}>
                    {card.suit.essence}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-mage-gold-700/30 bg-mage-purple-900/40 text-mage-gold-500 capitalize">
                    {card.suit.faction}
                  </span>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize ${getElementColor(card.suit.element)}`}>
                    {card.suit.element}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-mage-gold-700/30 bg-mage-purple-900/40 text-mage-gold-500 capitalize">
                    {card.suit.tarotSuit}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={onCloseAction}
              className="text-mage-gold-600 hover:text-mage-gold-500 transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div
                className={`relative w-80 aspect-[3/5] sm:w-96 bg-mage-purple-900/60 rounded-lg border-2 border-mage-gold-700/40 overflow-hidden ${
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
                    <p className="font-bold text-base mb-2 text-center text-mage-gold-600">
                      {card.name}
                    </p>
                    <p className="text-sm text-mage-gold-500 text-center">
                      Image not available
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-mage-purple-900/40 rounded-lg p-4 border border-mage-gold-800/20">
              <h3 className="font-semibold mb-2 text-sm text-mage-gold-600">
                Position {positionInfo.position}: {positionInfo.name}
              </h3>
              <p className="text-sm text-mage-gold-500">
                {positionInfo.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-mage-gold-700">Meaning</h3>
              <p className="text-mage-gold-500 leading-relaxed">{meaning}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-mage-gold-700">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {card.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-mage-purple-900/50 border border-mage-gold-800/30 rounded-full text-sm text-mage-gold-500"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onCloseAction}
            className="w-full mt-6 py-3 px-6 bg-mage-gold-700 text-mage-purple-950 rounded-lg font-medium hover:bg-mage-gold-600 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}
