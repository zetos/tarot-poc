"use client";

import { motion, useReducedMotion } from "framer-motion";
import TarotCard from "@/components/TarotCard";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";

type CelticCrossLayoutProps = {
  cards: DrawnCard[];
  spreadPositions: SpreadPosition[];
  onCardClick: (card: DrawnCard, position: SpreadPosition) => void;
};

export default function CelticCrossLayout({
  cards,
  spreadPositions,
  onCardClick,
}: CelticCrossLayoutProps) {
  const shouldReduceMotion = useReducedMotion();

  const getCardByPosition = (position: number) => {
    return cards.find((card) => card.position === position);
  };

  const getPositionInfo = (position: number) => {
    return spreadPositions.find((pos) => pos.position === position);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
        <motion.div
          className="relative w-full max-w-md lg:max-w-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-5 grid-rows-5 gap-2 sm:gap-3">
            {[5].map((pos) => {
              const card = getCardByPosition(pos);
              const posInfo = getPositionInfo(pos);
              if (!card || !posInfo) return null;
              return (
                <motion.div
                  key={pos}
                  className="col-start-3 row-start-1"
                  style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                  />
                </motion.div>
              );
            })}

            {[3].map((pos) => {
              const card = getCardByPosition(pos);
              const posInfo = getPositionInfo(pos);
              if (!card || !posInfo) return null;
              return (
                <motion.div
                  key={pos}
                  className="col-start-1 row-start-3"
                  style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                  />
                </motion.div>
              );
            })}

            {[1].map((pos) => {
              const card = getCardByPosition(pos);
              const posInfo = getPositionInfo(pos);
              if (!card || !posInfo) return null;
              return (
                <motion.div
                  key={pos}
                  className="col-start-3 row-start-3"
                  style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                  />
                </motion.div>
              );
            })}

            {[2].map((pos) => {
              const card = getCardByPosition(pos);
              const posInfo = getPositionInfo(pos);
              if (!card || !posInfo) return null;
              return (
                <motion.div
                  key={pos}
                  className="col-start-3 row-start-3 z-10"
                  style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                    className="rotate-90"
                  />
                </motion.div>
              );
            })}

            {[6].map((pos) => {
              const card = getCardByPosition(pos);
              const posInfo = getPositionInfo(pos);
              if (!card || !posInfo) return null;
              return (
                <motion.div
                  key={pos}
                  className="col-start-5 row-start-3"
                  style={{ gridColumn: "5 / 6", gridRow: "3 / 4" }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                  />
                </motion.div>
              );
            })}

            {[4].map((pos) => {
              const card = getCardByPosition(pos);
              const posInfo = getPositionInfo(pos);
              if (!card || !posInfo) return null;
              return (
                <motion.div
                  key={pos}
                  className="col-start-3 row-start-5"
                  style={{ gridColumn: "3 / 4", gridRow: "5 / 6" }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col-reverse gap-3 sm:gap-4 w-full max-w-[200px] sm:max-w-[220px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[7, 8, 9, 10].map((pos) => {
            const card = getCardByPosition(pos);
            const posInfo = getPositionInfo(pos);
            if (!card || !posInfo) return null;
            return (
              <motion.div key={pos} variants={cardVariants}>
                <TarotCard
                  card={card}
                  positionName={posInfo.name}
                  onClick={() => onCardClick(card, posInfo)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
