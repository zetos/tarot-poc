'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useEffectEvent } from 'react';

type ShuffleAnimationProps = {
  cardCount: number;
  onCompleteAction: () => void;
  duration?: number;
};

export default function ShuffleAnimation({
  cardCount,
  onCompleteAction,
  duration = 2.8,
}: ShuffleAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveDuration = shouldReduceMotion ? 0.4 : duration;
  const finalDelay = shouldReduceMotion
    ? Math.max(0, cardCount - 1) * 0.02
    : Math.floor(Math.max(0, cardCount - 1) / 3) * 0.12;
  const onComplete = useEffectEvent(onCompleteAction);
  const cards = Array.from({ length: cardCount }, (_, id) => ({
    id,
    batch: Math.floor(id / 3),
    offset: id % 3,
  }));

  useEffect(() => {
    const timer = setTimeout(onComplete, (effectiveDuration + finalDelay) * 1000);
    return () => clearTimeout(timer);
  }, [effectiveDuration, finalDelay]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-mage-purple-950/98 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="perspective-1000 relative w-48 aspect-[3/5] sm:w-64">
          {cards.map(({ id, batch, offset }) => {
            const side = id % 2 === 0 ? -1 : 1;
            const shuffleDirection = batch % 2 === 0 ? -1 : 1;
            const batchOffset = batch * 4;
            const shuffleOffset = batch * 8;
            const interleaveOffset = batch * 12;

            return (
              <motion.div
                key={id}
                className="absolute inset-0 origin-center"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0, scale: 0.8 }
                    : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 0.9 }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, scale: 1 }
                    : {
                        x: [
                          0,
                          side * (140 - batchOffset - offset * 3),
                          shuffleDirection *
                            (100 + shuffleOffset + offset * 4),
                          -shuffleDirection *
                            (50 + interleaveOffset + offset * 3),
                          0,
                        ],
                        y: [0, offset * 2, -10 + offset * 5, offset * 3, offset * 2],
                        rotate: [
                          0,
                          side * (5 - offset * 2 - batchOffset * 0.3),
                          shuffleDirection *
                            (8 + offset * 3 + shuffleOffset * 0.2),
                          -shuffleDirection * (4 + offset * 2),
                          0,
                        ],
                        scale: [1, 1.02, 0.98, 1.01, 1],
                        opacity: [0.9, 1, 0.95, 1, 0.9],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3, delay: id * 0.02 }
                    : {
                        duration: effectiveDuration,
                        delay: batch * 0.12,
                        ease: [
                          'easeOut',
                          'easeInOut',
                          'easeInOut',
                          'easeInOut',
                          'easeOut',
                        ],
                        times: [0, 0.15, 0.45, 0.75, 1],
                      }
                }
                style={{ zIndex: cardCount - id }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-mage-gold-700/40 shadow-xl shadow-mage-purple-900/50 transform-gpu">
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
          <p className="font-visit text-lg font-medium text-mage-gold-700 sm:text-xl">
            Shuffling the deck...
          </p>
          <p className="mt-2 font-visit text-sm text-mage-gold-500">
            Preparing your reading
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
