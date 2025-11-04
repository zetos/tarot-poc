"use client";

import { motion, useReducedMotion } from "framer-motion";
import TarotCard from "@/components/TarotCard";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";

type CircularSpread12LayoutProps = {
  cards: DrawnCard[];
  spreadPositions: SpreadPosition[];
  onCardClick: (card: DrawnCard, position: SpreadPosition) => void;
};

export default function CircularSpread12Layout({
  cards,
  spreadPositions,
  onCardClick,
}: CircularSpread12LayoutProps) {
  const shouldReduceMotion = useReducedMotion();
  const getCardByPosition = (position: number) => {
    return cards.find((card) => card.position === position);
  };

  const getPositionInfo = (position: number) => {
    return spreadPositions.find((pos) => pos.position === position);
  };

  // Calculate positions for 12 cards in a circle (like a clock)
  // Starting at top (12 o'clock) for January, going clockwise
  const getCardPosition = (index: number) => {
    const totalCards = 12;
    const angle = ((index - 1) * 360) / totalCards - 90; // -90 to start at top
    const angleRad = (angle * Math.PI) / 180;
    
    // Responsive radius
    const radiusPercent = 40; // percentage of container
    
    const x = 50 + radiusPercent * Math.cos(angleRad);
    const y = 50 + radiusPercent * Math.sin(angleRad);
    
    return { x, y };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        className="relative w-full max-w-4xl aspect-square"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Center label */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: 0.5 }}
        >
          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground/80">
              Yearly Circle
            </h3>
            <p className="text-sm text-foreground/50 mt-1">
              Click cards for details
            </p>
          </div>
        </motion.div>

        {/* Cards positioned in circle */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((pos) => {
          const card = getCardByPosition(pos);
          const posInfo = getPositionInfo(pos);
          if (!card || !posInfo) return null;

          const { x, y } = getCardPosition(pos);

          return (
            <motion.div
              key={pos}
              className="absolute z-10"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: "clamp(70px, 10vw, 120px)",
                x: "-50%",
                y: "-50%",
              }}
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
      </motion.div>
    </div>
  );
}
