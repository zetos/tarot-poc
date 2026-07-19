'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const stages = [
  'Consulting the cards...',
  'Granny is gathering her thoughts...',
  'The spirits are whispering...',
  'Weaving threads of fate...',
];

export default function LoadingCard() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const stageIndex = Math.floor(elapsedTime / 5) % stages.length;
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="mt-8 p-8 bg-mage-purple-800/60 rounded-2xl border border-mage-gold-800/30 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          className="relative w-48 sm:w-56 aspect-[3/5]"
          animate={shouldReduceMotion ? undefined : {
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{
              boxShadow:
                '0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)',
            }}
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : {
                boxShadow: [
                  'inset 0 0 20px rgba(212, 175, 55, 0.3)',
                  'inset 0 0 40px rgba(212, 175, 55, 0.5)',
                  'inset 0 0 20px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-lg border-2 border-mage-gold-700/60 bg-mage-purple-900/80"
            >
                <motion.div
                  animate={shouldReduceMotion ? undefined : {
                    borderColor: [
                      'rgba(212, 175, 55, 0.4)',
                      'rgba(212, 175, 55, 0.7)',
                      'rgba(212, 175, 55, 0.4)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-lg border border-mage-gold-700/20"
                >
                <Image
                  src="/assets/mage/tarotcardback.png"
                  alt="Tarot card back"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center space-y-4"
          animate={shouldReduceMotion ? undefined : {
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.p
            key={stageIndex}
            className="font-visit text-lg sm:text-xl text-mage-gold-600"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            ✧ {stages[stageIndex]} ✧
          </motion.p>

          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl text-mage-gold-500">⏱</span>
            <span className="font-visit text-2xl sm:text-3xl text-mage-gold-600 font-bold">
              {formatTime(elapsedTime)}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-mage-gold-600/40 to-transparent"
          animate={shouldReduceMotion ? undefined : {
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
}
