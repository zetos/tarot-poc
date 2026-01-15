'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';

type ShuffleAnimationProps = {
  cardCount: number;
  onCompleteAction: () => void;
  duration?: number;
};

type CardPhase =
  | 'split'
  | 'shuffle-1'
  | 'shuffle-2'
  | 'shuffle-3'
  | 'consolidate';

export default function ShuffleAnimation({
  cardCount,
  onCompleteAction,
  duration = 2.8,
}: ShuffleAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveDuration = shouldReduceMotion ? 0.4 : duration;

  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleteAction();
    }, effectiveDuration * 1000);

    return () => clearTimeout(timer);
  }, [onCompleteAction, effectiveDuration]);

  const cardData = useMemo(() => {
    return Array.from({ length: cardCount }, (_, i) => ({
      id: i,
      batch: Math.floor(i / 3),
      offset: i % 3,
    }));
  }, [cardCount]);

  if (shouldReduceMotion) {
    return (
      <motion.div
        className="fixed inset-0 bg-mage-purple-950/98 backdrop-blur-sm z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-48 aspect-[3/5] sm:w-64">
            {cardData.map((card, i) => (
              <motion.div
                key={card.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                style={{
                  zIndex: cardCount - i,
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-mage-gold-700/40 shadow-xl shadow-mage-purple-900/50">
                  <Image
                    src="/assets/mage/tarotcardback.png"
                    alt="Card back"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 192px, 256px"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="font-visit text-lg sm:text-xl font-medium text-mage-gold-700">
              Shuffling the deck...
            </p>
            <p className="font-visit text-sm text-mage-gold-500 mt-2">
              Preparing your reading
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const getPhasePosition = (
    cardId: number,
    batch: number,
    offset: number
  ): { x: number; y: number; rotate: number; zIndex: number } => {
    const isLeftPile = cardId % 2 === 0;
    const batchOffset = batch * 4;
    const cardOffset = offset * 3;

    if (isLeftPile) {
      return {
        x: -140 + batchOffset + cardOffset,
        y: offset * 2,
        rotate: -5 + offset * 2 + batchOffset * 0.3,
        zIndex: cardCount - cardId,
      };
    } else {
      return {
        x: 140 - batchOffset - cardOffset,
        y: offset * 2,
        rotate: 5 - offset * 2 - batchOffset * 0.3,
        zIndex: cardCount - cardId,
      };
    }
  };

  const getShufflePositions = (
    cardId: number,
    batch: number,
    offset: number
  ): { x: number; y: number; rotate: number } => {
    const direction = batch % 2 === 0 ? -1 : 1;
    const batchOffset = batch * 8;
    const cardOffset = offset * 4;

    return {
      x: direction * (100 + batchOffset + cardOffset),
      y: -10 + offset * 5,
      rotate: direction * (8 + offset * 3 + batchOffset * 0.2),
    };
  };

  const getInterleavePositions = (
    cardId: number,
    batch: number,
    offset: number
  ): { x: number; y: number; rotate: number } => {
    const direction = batch % 2 === 0 ? 1 : -1;
    const batchOffset = batch * 12;
    const cardOffset = offset * 3;

    return {
      x: direction * (50 + batchOffset + cardOffset),
      y: offset * 3,
      rotate: direction * (4 + offset * 2),
    };
  };

  const getConsolidatePosition = (
    cardId: number,
    offset: number
  ): { x: number; y: number; rotate: number } => {
    return {
      x: 0,
      y: offset * 2,
      rotate: 0,
    };
  };

  return (
    <motion.div
      className="fixed inset-0 bg-mage-purple-950/98 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-48 aspect-[3/5] sm:w-64 perspective-1000">
          {cardData.map((card) => {
            const phase1 = getPhasePosition(card.id, card.batch, card.offset);
            const phase2 = getShufflePositions(
              card.id,
              card.batch,
              card.offset
            );
            const phase3 = getInterleavePositions(
              card.id,
              card.batch,
              card.offset
            );
            const phase4 = getConsolidatePosition(card.id, card.offset);

            const batchDelay = card.batch * 0.12;

            return (
              <motion.div
                key={card.id}
                className="absolute inset-0 origin-center"
                initial={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 0.9,
                }}
                animate={{
                  x: [0, phase1.x, phase2.x, phase3.x, phase4.x],
                  y: [0, phase1.y, phase2.y, phase3.y, phase4.y],
                  rotate: [
                    0,
                    phase1.rotate,
                    phase2.rotate,
                    phase3.rotate,
                    phase4.rotate,
                  ],
                  scale: [1, 1.02, 0.98, 1.01, 1],
                  opacity: [0.9, 1, 0.95, 1, 0.9],
                }}
                transition={{
                  duration: effectiveDuration,
                  delay: batchDelay,
                  ease: [
                    'easeOut',
                    'easeInOut',
                    'easeInOut',
                    'easeInOut',
                    'easeOut',
                  ],
                  times: [0, 0.15, 0.45, 0.75, 1],
                }}
                style={{
                  zIndex: cardCount - card.id,
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-mage-gold-700/40 shadow-xl shadow-mage-purple-900/50 transform-gpu">
                  <Image
                    src="/assets/mage/tarotcardback.png"
                    alt="Card back"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 192px, 256px"
                    priority
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="font-visit text-lg sm:text-xl font-medium text-mage-gold-700">
            Shuffling the deck...
          </p>
          <p className="font-visit text-sm text-mage-gold-500 mt-2">
            Preparing your reading
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
