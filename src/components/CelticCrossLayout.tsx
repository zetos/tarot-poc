"use client";

import TarotCard from "@/components/TarotCard";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";
import { motion, useReducedMotion } from "framer-motion";

type CelticCrossLayoutProps = {
  cards: DrawnCard[];
  spreadPositions: SpreadPosition[];
  onCardClick: (card: DrawnCard, position: SpreadPosition) => void;
};

const crossPlacements = [
  { position: 5, className: 'col-start-3 row-start-1', grid: '3 / 4', row: '1 / 2' },
  { position: 4, className: 'col-start-1 row-start-3', grid: '1 / 2', row: '3 / 4' },
  { position: 1, className: 'col-start-3 row-start-3 z-10', grid: '3 / 4', row: '3 / 4', x: 0 },
  { position: 2, className: 'col-start-3 row-start-3 z-20', grid: '3 / 4', row: '3 / 4', x: 100, cardClassName: '-rotate-45' },
  { position: 6, className: 'col-start-5 row-start-3', grid: '5 / 6', row: '3 / 4' },
  { position: 3, className: 'col-start-3 row-start-5', grid: '3 / 4', row: '5 / 6' },
];

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
          className="relative w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div
            className="grid grid-cols-5 grid-rows-5 gap-2 sm:gap-3"
            style={{
              gridTemplateColumns: "repeat(5, minmax(0, 220px))",
              gridTemplateRows: "repeat(5, auto)",
            }}
          >
            {crossPlacements.map((placement) => {
              const card = getCardByPosition(placement.position);
              const posInfo = getPositionInfo(placement.position);
              if (!card || !posInfo) return null;

              return (
                <motion.div
                  key={placement.position}
                  className={placement.className}
                  style={{
                    gridColumn: placement.grid,
                    gridRow: placement.row,
                    x: placement.x,
                  }}
                  variants={cardVariants}
                >
                  <TarotCard
                    card={card}
                    positionName={posInfo.name}
                    onClick={() => onCardClick(card, posInfo)}
                    className={placement.cardClassName}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col-reverse gap-2 sm:gap-3 w-full max-w-[220px]"
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
