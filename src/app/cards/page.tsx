'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  majorArcana,
  questingCards,
  primordialismCards,
  dynamismCards,
  patternCards,
} from '@/data/cards';
import type { TarotCard } from '@/types/tarot';
import CardDetails from '@/components/CardDetails';
import Select from '@/components/Select';

type Description = {
  quote?: string;
  citation?: string;
  description: string;
  virtues?: string[];
  vices?: string[];
  element?: string;
  season?: string;
};

const descriptions: Record<string, Description> = {
  'Major Arcana': {
    quote:
      'O sages standing in God’s holy fire\nAs in the gold mosaic of a wall,\nCome from the holy fire, perne in a gyre,\nAnd be the singing-masters of my soul.',
    citation: 'W.B. Yeats, "Sailing to Byzantium"',
    description:
      'The 22 cards which comprise the Major Arcana form the heart of the Tarot. Taken together, the cards depict the passage of the soul from unformed possibility to informed awareness. The wealth of symbols these cards portray create a visual tapestry from threads spun by the collective unconscious. The strangely familiar iconography of the cards speaks to the imaginings of poets, dreamers, storytellers, willworkers and truthseekers alike.',
  },
  Questing: {
    quote:
      'The best lack all conviction, while the worst\nAre full of passionate intensity.\nSurely some revelation is at hand;',
    citation: 'W.B. Yeats, "The Second Coming"',
    description:
      'The Questing Essence embodies the search for perfection. The association of this suit with the Traditions and their paths toward Ascension reflects the purposeful focus of the individual cards. In the traditional Tarot, this is the suit of Wands, symbolic of the creative ability of the mage to transform reality according to her inner vision. Its elemental attribute is Fire, the ultimate source of transmutation and purification.',
    virtues: ['Creativity', 'Energy', 'Diversity'],
    vices: ['Restlessness', 'Pride', 'Obstinance'],
    element: 'Fire (seen as Air by some)',
    season: 'Spring',
  },
  Primordialism: {
    quote:
      'And what rough beast, its hour come round at last,\nslouches toward Bethlehem to be born?',
    citation: 'W.B. Yeats, "The Second Coming"',
    description:
      'The raw materials of existence are present in the Primordial Essence. Attributing this suit to the Nephandi emphasizes the turbulent and often violent outpouring of unrestrained passion and instinct. The traditional Tarot assigns this suit to Cups, the vessels which contain the vital fluids of life. Water is the element represented by these cards, reflecting their multiple meanings and their source as the wellsprings of desire and fertility.',
    virtues: ['Imagination', 'Love', 'Birth'],
    vices: ['Excess', 'Lasciviousness', 'Bad Temper'],
    element: 'Water',
    season: 'Summer',
  },
  Dynamism: {
    quote:
      'Things fall apart; the centre cannot hold;\nMere anarchy is loosed upon the world,',
    citation: 'W.B. Yeats, "The Second Coming"',
    description:
      'The Dynamic essence represents constant flux and restless activity. This suit is assigned to the Marauders, whose unfathomable goals challenge the boundaries of perceptual reality. In the traditional Tarot, this is the suit of Swords, symbols of aggressive action whose blades sever connections and change circumstances for good or ill. Air is the mercurial element assigned to these mutable cards.',
    virtues: ['Courage', 'Power', 'Vitality'],
    vices: ['Fear', 'Tyranny', 'Chaos'],
    element: 'Air (seen as Fire by some)',
    season: 'Fall',
  },
  Pattern: {
    quote:
      'The blood-dimmed tide is loosed, and everywhere\nThe ceremony of innocence is drowned;',
    citation: 'W.B. Yeats, "The Second Coming"',
    description:
      'The essence of Pattern is stability and formal structure. This is the suit of the Technocracy, whose vision dominates the physical world. In the traditional Tarot, this suit is assigned to Pentacles, symbolic of earthly progress and material gain. The element of unyielding Earth finds its representation in these cards.',
    virtues: ['Stability', 'Knowledge', 'Strength'],
    vices: ['Inflexibility', 'Greed', 'Intolerance'],
    element: 'Earth',
    season: 'Winter',
  },
};

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [filter, setFilter] = useState('All Cards');

  const allSections = [
    { title: 'Major Arcana', cards: majorArcana, key: 'Major Arcana' },
    { title: 'Questing (Fire)', cards: questingCards, key: 'Questing' },
    {
      title: 'Primordialism (Water)',
      cards: primordialismCards,
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
    section: (typeof sections)[0];
    shouldReduceMotion: boolean | null;
    sectionVariants: Variants;
    cardVariants: Variants;
    setSelectedCard: (card: TarotCard) => void;
  }> = ({
    section,
    shouldReduceMotion,
    sectionVariants,
    cardVariants,
    setSelectedCard,
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
      <motion.section
        ref={ref}
        className="mb-12"
        variants={sectionVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? false : isInView ? 'visible' : 'hidden'}
        exit={shouldReduceMotion ? undefined : 'exit'}
      >
        <h2 className="font-visit text-2xl font-semibold mb-6 text-mage-gold-700 border-b border-mage-gold-800/30 pb-2">
          {section.title}
        </h2>
        {descriptions[section.key] &&
          (() => {
            const desc = descriptions[section.key];
            return (
              <div className="mb-8 p-6 bg-mage-purple-800/30 rounded-lg border border-mage-gold-700/30 shadow-lg">
                {desc.quote && (
                  <blockquote className="border-l-4 border-mage-gold-700 italic text-mage-gold-600 mb-4 pl-4 text-lg">
                    <p className="whitespace-pre-line">{desc.quote}</p>
                    <cite className="block text-sm mt-2 font-medium">
                      — {desc.citation}
                    </cite>
                  </blockquote>
                )}
                <p className="text-mage-gold-600 mb-4 leading-relaxed">
                  {desc.description}
                </p>
                {desc.virtues && (
                  <p className="text-mage-gold-600 mb-2">
                    <strong className="text-mage-gold-700">Virtues:</strong>{' '}
                    {desc.virtues.join(', ')}
                  </p>
                )}
                {desc.vices && (
                  <p className="text-mage-gold-600 mb-2">
                    <strong className="text-mage-gold-700">Vices:</strong>{' '}
                    {desc.vices.join(', ')}
                  </p>
                )}
                {desc.element && (
                  <p className="text-mage-gold-600 mb-2">
                    <strong className="text-mage-gold-700">Element:</strong>{' '}
                    {desc.element}
                  </p>
                )}
                {desc.season && (
                  <p className="text-mage-gold-600">
                    <strong className="text-mage-gold-700">Season:</strong>{' '}
                    {desc.season}
                  </p>
                )}
              </div>
            );
          })()}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {section.cards.map((card: TarotCard) => (
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
