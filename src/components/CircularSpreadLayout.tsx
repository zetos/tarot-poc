'use client';

import { motion, useReducedMotion } from 'framer-motion';

import TarotCard from '@/components/TarotCard';
import type { DrawnCard, SpreadPosition } from '@/types/tarot';

type CircularSpreadLayoutProps = {
  cards: DrawnCard[];
  spreadPositions: SpreadPosition[];
  onCardClick: (card: DrawnCard, position: SpreadPosition) => void;
  title: string;
  radius: number;
  containerClassName: string;
  cardWidth: string;
  stagger: number;
};

export default function CircularSpreadLayout({
  cards,
  spreadPositions,
  onCardClick,
  title,
  radius,
  containerClassName,
  cardWidth,
  stagger,
}: CircularSpreadLayoutProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        className={`relative aspect-square w-full ${containerClassName}`}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : stagger,
              delayChildren: shouldReduceMotion ? 0 : 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: 0.5 }}
        >
          <div className="px-4 text-center">
            <h3 className="text-xl font-bold text-foreground/80 sm:text-2xl">
              {title}
            </h3>
            <p className="mt-1 text-sm text-foreground/50">
              Click cards for details
            </p>
          </div>
        </motion.div>

        {spreadPositions.map((position, index) => {
          const card = cards.find((item) => item.position === position.position);
          if (!card) return null;

          const angle = (index * 360) / spreadPositions.length - 90;
          const radians = (angle * Math.PI) / 180;

          return (
            <motion.div
              key={position.position}
              className="absolute z-10"
              style={{
                left: `${50 + radius * Math.cos(radians)}%`,
                top: `${50 + radius * Math.sin(radians)}%`,
                width: cardWidth,
                x: '-50%',
                y: '-50%',
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: shouldReduceMotion ? 0.1 : 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
            >
              <TarotCard
                card={card}
                positionName={position.name}
                onClick={() => onCardClick(card, position)}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
