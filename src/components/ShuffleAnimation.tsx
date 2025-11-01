"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type ShuffleAnimationProps = {
  onCompleteAction: () => void;
  duration?: number;
};

export default function ShuffleAnimation({
  onCompleteAction,
  duration = 2.5,
}: ShuffleAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const cardCount = 12;
  const effectiveDuration = shouldReduceMotion ? 0.3 : duration;

  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleteAction();
    }, effectiveDuration * 1000);

    return () => clearTimeout(timer);
  }, [onCompleteAction, effectiveDuration]);

  const getRandomOffset = (index: number) => {
    // Create deterministic but varied offsets based on index
    const seed = index * 17;
    const x = ((seed % 40) - 20) * (1 + index * 0.1);
    const y = ((seed % 30) - 15) * (1 + index * 0.1);
    const rotate = ((seed % 30) - 15) * 1.5;
    return { x, y, rotate };
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background/98 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Shuffle animation container */}
        <div className="relative w-48 h-72 sm:w-64 sm:h-96">
          {Array.from({ length: cardCount }).map((_, i) => {
            const offset = getRandomOffset(i);
            const delay = shouldReduceMotion ? 0 : i * 0.08;

            return (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 0.9,
                }}
                animate={{
                  x: [0, offset.x, -offset.x * 0.5, offset.x * 0.7, 0],
                  y: [0, offset.y, -offset.y * 0.5, offset.y * 0.7, 0],
                  rotate: [
                    0,
                    offset.rotate,
                    -offset.rotate * 0.5,
                    offset.rotate * 0.7,
                    0,
                  ],
                  scale: [1, 1.02, 0.98, 1.01, 1],
                  opacity: [0.9, 1, 0.95, 1, 0.9],
                }}
                transition={{
                  duration: effectiveDuration,
                  delay,
                  ease: "easeInOut",
                  repeat: 0,
                }}
                style={{
                  zIndex: cardCount - i,
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-black/[.1] dark:border-white/[.2] shadow-xl">
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

        {/* Loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-lg sm:text-xl font-medium text-foreground/90">
            Shuffling the deck...
          </p>
          <p className="text-sm text-foreground/60 mt-2">
            Preparing your reading
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
