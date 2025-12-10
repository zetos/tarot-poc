"use client";

import { useState } from "react";
import Image from "next/image";
import { majorArcana, questingCards, primordialismoCards, dynamismCards, patternCards } from "@/data/cards";
import type { TarotCard } from "@/types/tarot";
import CardDetails from "@/components/CardDetails";
import Select from "@/components/Select";

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [filter, setFilter] = useState("All Cards");

  const allSections = [
    { title: "Major Arcana", cards: majorArcana, key: "Major Arcana" },
    { title: "Questing (Fire)", cards: questingCards, key: "Questing" },
    { title: "Primordialism (Water)", cards: primordialismoCards, key: "Primordialism" },
    { title: "Dynamism (Air)", cards: dynamismCards, key: "Dynamism" },
    { title: "Pattern (Earth)", cards: patternCards, key: "Pattern" },
  ];

  const filterOptions = [
    { value: "All Cards", label: "All Cards" },
    ...allSections.map(section => ({ value: section.key, label: section.title })),
  ];

  const sections = filter === "All Cards" ? allSections : allSections.filter(section => section.key === filter);

  return (
    <div className="min-h-screen bg-mage-purple-950 text-mage-gold-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
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
        </div>

        {sections.map((section) => (
          <section key={section.title} className="mb-12">
            <h2 className="font-visit text-2xl font-semibold mb-6 text-mage-gold-700 border-b border-mage-gold-800/30 pb-2">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {section.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-mage-purple-800/80 rounded-lg border-2 border-mage-gold-700/40 overflow-hidden cursor-pointer hover:border-mage-gold-600 transition-colors"
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
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CardDetails
        card={selectedCard}
        orientation="upright"
        onCloseAction={() => setSelectedCard(null)}
      />
    </div>
  );
}