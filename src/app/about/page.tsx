export default function About() {
  return (
    <div className="min-h-screen bg-mage-purple-950 text-mage-gold-700">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-abbess text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-mage-gold-700">
            About Mage: The Ascension Tarot
          </h1>
          <p className="text-lg text-mage-gold-600">
            A mystical journey through the cards of enlightenment
          </p>
        </div>

        <div className="bg-mage-purple-800/60 rounded-2xl p-8 sm:p-10 border border-mage-gold-800/30 shadow-lg shadow-mage-purple-900/50">
          <div className="space-y-6 text-mage-gold-500 leading-relaxed">
            <p>
              This interactive tarot reading application brings the mystical world of Mage: The Ascension to life through digital divination.
              Based on the iconic tabletop role-playing game, our deck captures the essence of Awakened magic, paradigm clashes, and the
              eternal quest for enlightenment.
            </p>

            <p>
              The deck consists of 78 cards, divided into the 22 Major Arcana representing fundamental archetypes and universal forces,
              and 56 Minor Arcana cards spread across four mystical Essences: Questing (Fire), Primordialism (Water), Dynamism (Air),
              and Pattern (Earth). Each Essence embodies different aspects of magical philosophy and faction dynamics within the World of Darkness.
            </p>

            <p>
              Experience the Celtic Cross spread, explore card meanings both upright and reversed, and discover how the cards can illuminate
              your path through the complexities of modern magic and self-discovery. Whether you&apos;re a longtime fan of Mage or new to the
              wonders of tarot, this application offers a unique blend of gaming lore and divinatory wisdom.
            </p>

            <div className="pt-6 border-t border-mage-gold-800/20">
              <p className="text-sm text-mage-gold-600/80 italic">
                &ldquo;The cards do not look toward the future; rather, they reflect the present and the choices that will shape tomorrow.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}