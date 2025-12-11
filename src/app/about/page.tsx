import Image from 'next/image';

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
               <h2 className="text-xl font-semibold mb-4 text-mage-gold-600">Dark Pack Agreement</h2>
               <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                 <Image
                   src="/darkpack_logo1.png"
                   alt="Dark Pack Logo"
                   width={60}
                   height={60}
                   className="rounded border border-mage-gold-800/30"
                 />
                 <p className="text-sm text-mage-gold-500/90 leading-relaxed">
                   This application is created as a fan project in accordance with the World of Darkness Dark Pack Agreement.
                   The Dark Pack program allows fans to create and share non-commercial content while respecting Paradox Interactive&apos;s intellectual property rights.
                 </p>
               </div>
               <p className="text-xs text-mage-gold-600/70 italic mb-2">
                 Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved.
                 For more information please visit <a href="https://worldofdarkness.com" className="text-mage-gold-400 hover:text-mage-gold-300 underline" target="_blank" rel="noopener noreferrer">worldofdarkness.com</a>.
               </p>
               <p className="text-xs text-mage-gold-600/70 italic">
                 This material is not official World of Darkness material. For the full Dark Pack Agreement, visit the <a href="https://www.paradoxinteractive.com/games/world-of-darkness/community/dark-pack-agreement" className="text-mage-gold-400 hover:text-mage-gold-300 underline" target="_blank" rel="noopener noreferrer">official page</a>.
               </p>
             </div>

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