'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  majorArcana,
  questingCards,
  primordialismoCards,
  dynamismCards,
  patternCards,
} from '@/data/cards';
import type { TarotCard } from '@/types/tarot';
import CardDetails from '@/components/CardDetails';
import Select from '@/components/Select';

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [filter, setFilter] = useState('All Cards');

  const allSections = [
    { title: 'Major Arcana', cards: majorArcana, key: 'Major Arcana' },
    { title: 'Questing (Fire)', cards: questingCards, key: 'Questing' },
    {
      title: 'Primordialism (Water)',
      cards: primordialismoCards,
      key: 'Primordialism',
    },
    { title: 'Dynamism (Air)', cards: dynamismCards, key: 'Dynamism' },
    { title: 'Pattern (Earth)', cards: patternCards, key: 'Pattern' },
  ];

  const filterOptions = [
    { value: 'All Cards', label: 'All Cards' },
    ...allSections.map((section) => ({
      value: section.key,
      label: section.title,
    })),
  ];

  const sections =
    filter === 'All Cards'
      ? allSections
      : allSections.filter((section) => section.key === filter);

  const shouldReduceMotion = useReducedMotion();

  const SectionItem: React.FC<{
    section: typeof sections[0];
    shouldReduceMotion: boolean | null;
    sectionVariants: Variants;
    cardVariants: Variants;
    setSelectedCard: (card: TarotCard) => void;
  }> = ({ section, shouldReduceMotion, sectionVariants, cardVariants, setSelectedCard }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <motion.section
        ref={ref}
        className="mb-12"
        variants={sectionVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? false : isInView ? "visible" : "hidden"}
        exit={shouldReduceMotion ? undefined : 'exit'}
      >
        <h2 className="font-visit text-2xl font-semibold mb-6 text-mage-gold-700 border-b border-mage-gold-800/30 pb-2">
          {section.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {section.cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-mage-purple-800/80 rounded-lg border-2 border-mage-gold-700/40 overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : 'hover'}
              whileTap={shouldReduceMotion ? undefined : 'tap'}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={() => setSelectedCard(card)}
            >
              <Image
                src={card.imagePath}
                alt={card.name}
                width={150}
                height={250}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
   };

   const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-mage-purple-950 text-mage-gold-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="font-abbess text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-mage-gold-700">
            The Cards
          </h1>
          <p className="text-lg text-mage-gold-600 mb-8">
            Explore all 78 cards of the Mage: The Ascension Tarot deck
          </p>
          <div className="max-w-xs mx-auto">
            <Select
              label="Filter by Arcana"
              options={filterOptions}
              value={filter}
              onChange={setFilter}
              placeholder="Select filter"
            />
          </div>
        </motion.div>

        <AnimatePresence mode="sync">
          {sections.map((section) => (
            <SectionItem
              key={section.title}
              section={section}
              shouldReduceMotion={shouldReduceMotion}
              sectionVariants={sectionVariants}
              cardVariants={cardVariants}
              setSelectedCard={setSelectedCard}
            />
          ))}
        </AnimatePresence>
      </div>

      <CardDetails
        card={selectedCard}
        orientation="upright"
        onCloseAction={() => setSelectedCard(null)}
      />
    </div>
  );
}
