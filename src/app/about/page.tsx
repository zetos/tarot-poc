import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-mage-purple-950 text-mage-gold-700">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-abbess text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-mage-gold-700">
            About
          </h1>
          <p className="font-abbess text-lg text-mage-gold-600">
            Mage: The Ascension Tarot
          </p>
        </div>

        <div className="bg-mage-purple-800/60 rounded-2xl p-8 sm:p-10 border border-mage-gold-800/30 shadow-lg shadow-mage-purple-900/50">
          <div className="space-y-6 text-mage-gold-500 leading-relaxed">
            <blockquote className="bg-mage-purple-700/30 border-l-4 border-mage-gold-600 p-4 rounded-r-lg mb-4">
              <p className="text-mage-gold-500 italic leading-relaxed">
                The Dance that is... everything... You&apos;ll see. Earth, air,
                fire, water — and the Greater Trumps. There&apos;s a way to all
                knowledge and prophecy, when the cards and they are brought
                together.
              </p>
              <cite className="block text-center text-sm text-mage-gold-400 italic">
                — Charles Williams, The Greater Trumps
              </cite>
            </blockquote>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              For those who seek a greater awareness of their place in the
              universe, the Tarot is said by some to be the bridge between
              conscious perception and unconscious wisdom. The Mage Tarot is a
              deck of destiny. Within the compass of 78 cards lies a Path from
              sleep to Awakening. Its symbols are the signposts which mark the
              journey of the soul through the World of Darkness into a realm of
              greater possibilities.
            </p>

            <h2 className="font-visit text-2xl font-bold mb-4 text-mage-gold-600">
              A Bit of Common Sense, Please
            </h2>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              Although its symbolism concurs with many traditional forms of
              Tarot imagery and association, this deck is not intended to be
              used for true readings. It is not a starter deck for would-be
              magicians; it is novelty item only.
            </p>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              Tarot cards, whether traditional or modern, are not toys. Though
              we hope that you will find their use as a tool for Storytelling
              exciting and inspirational, the Tarot traditionally functions as a
              tool toward self-discovery. Many accounts credit Tarot readings
              with insights beyond those of &ldquo;normal&rdquo; perceptions;
              others say the cards simply allow you to access those parts of the
              subconscious that we miss in our daily lives. Whatever the truth
              may be (assuming there is only one truth), we do not recommend
              using a game deck for real-life concerns, nor do we condone the
              use of tools by those who don&apos;t know what they&apos;re doing
              with them.
            </p>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              Believer or not, have some respect and common sense. Please.
            </p>

            <h2 className="font-visit text-2xl font-bold mb-4 text-mage-gold-600">
              The Cards
            </h2>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              The Mage Tarot is intended primarily for use with games set in the
              World of Darkness. Our purpose is not to teach you how to use the
              Tarot (you can learn that from any deck), but rather to provide
              you with a deck that reflects the imagery of our dark fantasy
              world. Several possible game uses are discussed later. Although
              slanted toward Mage: The Ascension, this deck can be used with any
              of White Wolf&apos;s Storyteller System games.
            </p>

            <h3 className="font-visit text-xl font-semibold mb-3 text-mage-gold-600">
              Symbolism
            </h3>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              Many of the symbols familiar to Tarot aficionados can be found in
              this deck, but several have been modernized or replaced by more
              Gothic-Punk counterparts. Though the cards can be used alone for
              readings, they become even more meaningful when compared with a
              traditional deck such as the Rider-Waite deck.
            </p>

            <h3 className="font-visit text-xl font-semibold mb-3 text-mage-gold-600">
              The Text
            </h3>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              Each card has a few meanings ascribed to it for both the upright
              and the reversed positions, and each has a paragraph or so of text
              which comments on the card. Unlike more traditional decks, the
              paragraph does not describe the card and give a possible
              interpretation; instead, it creates a mood or paints a picture
              reflective of the World of Darkness. Some feature characters from
              various Mage: The Ascension books. Those resources might provide
              more references for the user, but they&apos;re not essential for
              understanding the cards.
            </p>

            <h3 className="font-visit text-xl font-semibold mb-3 text-mage-gold-600">
              The Suits
            </h3>

            <p className="text-mage-gold-500 leading-relaxed mb-4">
              While they&apos;re analogous to the normal Tarot suits of Wands,
              Swords, Cups and Pentacles, the suits of the Mage Tarot correspond
              to the various sorts of Essences that color mystic Avatars. Each
              Essence is in turn associated with one of the four-factions of
              mage society. The suits thus have the following correspondences:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-mage-gold-800/30 bg-mage-purple-700/20 rounded-lg">
                <thead className="bg-mage-purple-700/50">
                  <tr>
                    <th className="border border-mage-gold-800/30 p-3 text-left text-mage-gold-600 font-semibold">
                      Suit (Essence)
                    </th>
                    <th className="border border-mage-gold-800/30 p-3 text-left text-mage-gold-600 font-semibold">
                      Faction
                    </th>
                    <th className="border border-mage-gold-800/30 p-3 text-left text-mage-gold-600 font-semibold">
                      Element
                    </th>
                    <th className="border border-mage-gold-800/30 p-3 text-left text-mage-gold-600 font-semibold">
                      Tarot Suit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-mage-gold-800/30">
                    <td className="p-3 text-mage-gold-500">Questing</td>
                    <td className="p-3 text-mage-gold-500">Traditions</td>
                    <td className="p-3 text-mage-gold-500">Fire</td>
                    <td className="p-3 text-mage-gold-500">Wands</td>
                  </tr>
                  <tr className="border border-mage-gold-800/30">
                    <td className="p-3 text-mage-gold-500">Primordialism</td>
                    <td className="p-3 text-mage-gold-500">Nephandi</td>
                    <td className="p-3 text-mage-gold-500">Water</td>
                    <td className="p-3 text-mage-gold-500">Cups</td>
                  </tr>
                  <tr className="border border-mage-gold-800/30">
                    <td className="p-3 text-mage-gold-500">Dynamism</td>
                    <td className="p-3 text-mage-gold-500">Marauders</td>
                    <td className="p-3 text-mage-gold-500">Air</td>
                    <td className="p-3 text-mage-gold-500">Swords</td>
                  </tr>
                  <tr className="border border-mage-gold-800/30">
                    <td className="p-3 text-mage-gold-500">Pattern</td>
                    <td className="p-3 text-mage-gold-500">Technocracy</td>
                    <td className="p-3 text-mage-gold-500">Earth</td>
                    <td className="p-3 text-mage-gold-500">Pentacles</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-6 border-t border-mage-gold-800/20">
              <h2 className="font-visit text-xl font-semibold mb-4 text-mage-gold-600">
                Dark Pack Agreement
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <Image
                  src="/darkpack_logo1.png"
                  alt="Dark Pack Logo"
                  width={60}
                  height={60}
                  className="rounded border border-mage-gold-800/30"
                />
                <p className="text-sm text-mage-gold-500/90 leading-relaxed">
                  This application is created as a fan project in accordance
                  with the World of Darkness Dark Pack Agreement. The Dark Pack
                  program allows fans to create and share non-commercial content
                  while respecting Paradox Interactive&apos;s intellectual
                  property rights.
                </p>
              </div>
              <p className="text-xs text-mage-gold-600/70 italic mb-2">
                Portions of the materials are the copyrights and trademarks of
                Paradox Interactive AB, and are used with permission. All rights
                reserved. For more information please visit{' '}
                <a
                  href="https://worldofdarkness.com"
                  className="text-mage-gold-400 hover:text-mage-gold-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  worldofdarkness.com
                </a>
                .
              </p>
              <p className="text-xs text-mage-gold-600/70 italic">
                This material is not official World of Darkness material. For
                the full Dark Pack Agreement, visit the{' '}
                <a
                  href="https://www.paradoxinteractive.com/games/world-of-darkness/community/dark-pack-agreement"
                  className="text-mage-gold-400 hover:text-mage-gold-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official page
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-mage-gold-800/20">
              <p className="text-sm text-mage-gold-600/80 italic">
                &ldquo;The cards do not look toward the future; rather, they
                reflect the present and the choices that will shape
                tomorrow.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
