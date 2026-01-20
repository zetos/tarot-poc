"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { CardInterpretation, DrawnCard } from "@/types/tarot";
import LoadingCard from "./LoadingCard";

type AIInterpretationProps = {
  interpretation: {
    cardInterpretations: CardInterpretation[];
    overallReading: string;
    closingAdvice: string;
  } | null;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  drawnCards?: DrawnCard[];
};

export default function AIInterpretation({
  interpretation,
  isLoading,
  error,
  onRetry,
  drawnCards,
}: AIInterpretationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!isLoading && !error && !interpretation) {
    return null;
  }

  if (isLoading) {
    return <LoadingCard />;
  }

  if (error) {
    return (
      <motion.div
        className="mt-8 p-8 bg-mage-purple-800/60 rounded-2xl border border-red-800/50 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center space-y-4">
          <h3 className="font-abbess text-2xl text-red-400">
            Reading Interrupted
          </h3>
          <p className="font-visit text-base text-mage-gold-600">
            {error}
          </p>
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-mage-gold-700 text-mage-purple-950 rounded-lg font-medium hover:bg-mage-gold-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  if (!interpretation) return null;

  const hasContent =
    (interpretation.overallReading?.trim() || '').length > 0 ||
    (interpretation.closingAdvice?.trim() || '').length > 0 ||
    interpretation.cardInterpretations.some(ci => ci.interpretation?.trim());

  if (!hasContent) {
    return (
      <motion.div
        className="mt-8 p-8 bg-mage-purple-800/60 rounded-2xl border border-mage-gold-800/30 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-6">
          <h2 className="font-abbess text-2xl sm:text-3xl font-bold text-mage-gold-700">
            The Cards Are Silent
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="font-visit text-base sm:text-lg text-mage-gold-600 leading-relaxed mb-4">
              Sometimes the cards have nothing to say.
            </p>
            <p className="font-visit text-base sm:text-lg text-mage-gold-600 leading-relaxed mb-4">
              The answer you seek may already be within you, or you might need to ask a more specific question.
            </p>
            <p className="font-visit text-sm text-mage-gold-500 italic">
              "The universe speaks in whispers to those who listen closely."
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const getCardById = (cardId: number) => {
    if (!drawnCards) return null;
    console.log(`Looking for card ID: ${cardId} in ${drawnCards.length} cards`);
    const foundCard = drawnCards.find((dc) => dc.id === cardId);
    console.log(`Card ID ${cardId} found:`, !!foundCard);
    return foundCard || null;
  };

  return (
    <motion.div
      className="mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-8">
        {interpretation.overallReading?.trim() && (
          <motion.section variants={sectionVariants} className="space-y-6">
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-6xl text-mage-gold-700 font-abbess">✦</span>
              </div>
              <div className="relative text-center space-y-3">
                <h2 className="font-abbess text-3xl sm:text-4xl font-bold text-mage-gold-700">
                  Granny's Interpretation
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-mage-gold-700/40"></div>
                  <p className="font-visit text-sm text-mage-gold-500 tracking-widest uppercase">
                    The cards speak as one
                  </p>
                  <div className="w-16 h-px bg-mage-gold-700/40"></div>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-mage-gold-600 leading-relaxed text-center max-w-4xl mx-auto px-4">
              {interpretation.overallReading}
            </p>
          </motion.section>
        )}

        <motion.div
          className="flex justify-center py-2"
          variants={sectionVariants}
        >
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-mage-gold-700/40 to-transparent"></div>
        </motion.div>

        <motion.section variants={sectionVariants} className="space-y-8">
          <div className="text-center space-y-4 pb-4">
            <h2 className="font-abbess text-3xl sm:text-4xl font-bold text-mage-gold-700">
              Card by Card
            </h2>
            <p className="font-visit text-sm text-mage-gold-500 tracking-widest uppercase">
              Unraveling the threads of fate
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            <AnimatePresence>
              {interpretation.cardInterpretations.map((cardInterp, index) => {
                const drawnCard = getCardById(cardInterp.cardId);
                const imagePath = drawnCard?.imagePath || null;

                return (
                  <motion.div
                    key={cardInterp.position}
                    variants={sectionVariants}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mage-purple-800/60 via-mage-gold-700/20 to-mage-purple-800/60 border border-mage-gold-700/50 px-8 py-3 rounded-full shadow-lg">
                        <span className="text-mage-gold-600">✦</span>
                        <p className="font-visit text-sm sm:text-base text-mage-gold-600">
                          Position {cardInterp.position}: {cardInterp.positionName}
                        </p>
                        <span className="text-mage-gold-600">✦</span>
                      </div>
                    </div>

                    <div
                      className={`
                        flex flex-col md:flex-row
                        items-center md:items-start
                        gap-6 md:gap-10
                        ${index % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                        }
                        max-w-5xl mx-auto px-4
                      `}
                    >
                      <div className="relative w-52 sm:w-56 md:w-64 aspect-[3/5] flex-shrink-0">
                        <div
                          className={`
                            absolute inset-0 rounded-lg overflow-hidden shadow-2xl
                            ${cardInterp.orientation === "reversed" ? "rotate-180" : ""}
                            bg-gradient-to-br from-mage-purple-900/90 to-mage-purple-950/90
                            border-2 border-mage-gold-700/60
                            before:absolute before:inset-0 before:rounded-lg
                            before:border before:border-mage-gold-700/30
                            before:shadow-[inset_0_0_20px_rgba(212,175,55,0.1)]
                          `}
                        >
                          <motion.div
                            animate={{
                              boxShadow: [
                                "inset 0 0 10px rgba(212, 175, 55, 0.1)",
                                "inset 0 0 20px rgba(212, 175, 55, 0.2)",
                                "inset 0 0 10px rgba(212, 175, 55, 0.1)",
                              ],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-lg"
                          />
                          {imagePath ? (
                            <Image
                              src={imagePath}
                              alt={cardInterp.cardName}
                              fill
                              className="object-contain"
                              sizes="(max-width: 640px) 208px, (max-width: 768px) 224px, 256px"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-mage-purple-800/60">
                              <div className="text-5xl mb-3 opacity-40">🔮</div>
                              <p className="font-abbess text-sm sm:text-base font-bold text-center text-mage-gold-600 mb-2">
                                {cardInterp.cardName}
                              </p>
                              <p className="font-visit text-xs text-mage-gold-500 text-center capitalize">
                                {cardInterp.orientation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div
                        className={`
                          flex-1 space-y-4
                          text-center md:text-left
                          ${index % 2 === 0 ? "md:text-left" : "md:text-right"}
                        `}
                      >
                        <div className="space-y-1">
                          <h3
                            className={`
                              font-abbess text-xl sm:text-2xl lg:text-3xl font-bold 
                              bg-gradient-to-r from-mage-gold-700 via-mage-gold-500 to-mage-gold-700
                              bg-clip-text text-transparent
                              ${index % 2 === 0 ? "" : "md:bg-gradient-to-l"}
                            `}
                          >
                            {cardInterp.cardName}
                          </h3>
                          <p className="font-visit text-base sm:text-lg text-mage-gold-500 capitalize tracking-wide">
                            {cardInterp.orientation}
                          </p>
                        </div>

                        <div
                          className={`
                            relative
                            before:absolute before:top-0 before:bottom-0 before:w-px
                            before:bg-gradient-to-b before:from-mage-gold-700/40 before:via-mage-gold-700/20 before:to-transparent
                            ${index % 2 === 0 ? "md:before:left-0 md:pl-6" : "md:before:right-0 md:pr-6"}
                          `}
                        >
                          <p className="text-base sm:text-lg lg:text-xl text-mage-gold-600 leading-relaxed">
                            {cardInterp.interpretation}
                          </p>
                        </div>
                      </div>
                    </div>

                    {cardInterp.position <
                      interpretation.cardInterpretations.length && (
                      <motion.div
                        className="flex items-center justify-center gap-4 py-4 opacity-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-mage-gold-700/40 to-transparent"></div>
                        <span className="text-mage-gold-700/60 text-sm">✧</span>
                        <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-mage-gold-700/40 to-transparent"></div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.section>

        {interpretation.closingAdvice?.trim() && (
          <motion.section
            variants={sectionVariants}
            className="space-y-6 pt-8 border-t border-mage-gold-800/20"
          >
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-6xl text-mage-gold-700 font-abbess">☽</span>
              </div>
              <div className="relative text-center space-y-3">
                <h2 className="font-abbess text-3xl sm:text-4xl font-bold text-mage-gold-700">
                  Granny's Wisdom
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-mage-gold-700/40"></div>
                  <p className="font-visit text-sm text-mage-gold-500 tracking-widest uppercase">
                    Take this to heart
                  </p>
                  <div className="w-16 h-px bg-mage-gold-700/40"></div>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-mage-gold-600 leading-relaxed text-center max-w-4xl mx-auto px-4 font-medium">
              {interpretation.closingAdvice}
            </p>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
}
