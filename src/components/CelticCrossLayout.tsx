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
  { position: 5, className: "col-start-2 row-start-1 lg:col-start-3" },
  { position: 4, className: "col-start-1 row-start-2 lg:row-start-3" },
  {
    position: 1,
    className: "col-start-2 row-start-2 z-10 lg:col-start-3 lg:row-start-3",
  },
  {
    position: 2,
    className:
      "relative left-[clamp(44px,14vw,64px)] col-start-2 row-start-2 z-20 lg:left-[100px] lg:col-start-3 lg:row-start-3",
    cardClassName: "-rotate-45",
    cardWrapperClassName: "mx-auto w-3/4 lg:w-full",
  },
  { position: 6, className: "col-start-3 row-start-2 lg:col-start-5 lg:row-start-3" },
  { position: 3, className: "col-start-2 row-start-3 lg:col-start-3 lg:row-start-5" },
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
          <div className="mx-auto grid w-full max-w-2xl grid-cols-3 grid-rows-3 gap-x-2 gap-y-5 sm:grid-cols-[repeat(3,minmax(0,180px))] sm:justify-center sm:gap-x-3 sm:gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-[repeat(5,minmax(0,220px))] lg:grid-rows-[repeat(5,auto)] lg:justify-start lg:gap-3">
            {crossPlacements.map((placement) => {
              const card = getCardByPosition(placement.position);
              const posInfo = getPositionInfo(placement.position);
              if (!card || !posInfo) return null;

              return (
                <motion.div
                  key={placement.position}
                  className={placement.className}
                  variants={cardVariants}
                >
                  <div className={placement.cardWrapperClassName}>
                    <TarotCard
                      card={card}
                      positionName={posInfo.name}
                      onClick={() => onCardClick(card, posInfo)}
                      className={placement.cardClassName}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="grid w-full max-w-lg grid-cols-2 gap-x-4 gap-y-6 sm:max-w-3xl sm:grid-cols-4 sm:gap-3 lg:flex lg:max-w-[220px] lg:flex-col-reverse"
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
