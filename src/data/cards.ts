import type { TarotCard } from '@/types/tarot';

const questingSuit = {
  essence: 'questing' as const,
  faction: 'traditions' as const,
  element: 'fire' as const,
  tarotSuit: 'wands' as const,
};
const primordialismSuit = {
  essence: 'primordialism' as const,
  faction: 'nephandi' as const,
  element: 'water' as const,
  tarotSuit: 'cups' as const,
};
const dynamismSuit = {
  essence: 'dynamism' as const,
  faction: 'marauders' as const,
  element: 'air' as const,
  tarotSuit: 'swords' as const,
};
const patternSuit = {
  essence: 'pattern' as const,
  faction: 'technocracy' as const,
  element: 'earth' as const,
  tarotSuit: 'pentacles' as const,
};

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: 'The Fool',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/0 Fool.png',
    uprightMeaning:
      'Possibility, courage, ecstasy, creative expression, risk-taking, trust, adventure spontaneity, free spirit, leap of faith',
    reversedMeaning:
      'Stagnation, eccentricity, folly, thoughtlessness, indiscretion',
    keywords: ['beginnings', 'possibility', 'spontaneity', 'free spirit'],
    flavorText:
      'The Faerie: Clad in the vestments of mortal experience and spiritual awareness, the child of the Dreaming stands poised on the edge of physical reality, open to the embrace of all possibility. The sword of his manifest will rests easily upon his shoulder, for the time of choice has not yet come.',
  },
  {
    id: 1,
    name: 'The Mage',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/1 Mage.png',
    uprightMeaning:
      'Will, communication, inherent ability, memory, clarity of thought and feeling, organization, invention, originality',
    reversedMeaning: 'Weakness, indecision, manipulation',
    keywords: ['will', 'clarity', 'invention', 'originality'],
    flavorText:
      '“What is will but the projection of energy into the world of matter?” With an act of conscious thought, Dante grasps the wand of Prime, closing the link between the energy that gives him the power of magic and the tools that lie before him on the table of the world. The building blocks of his desires — the Primordial, Questing, Dynamic and Pattern Essences — contain within them the remaining eight Spheres of magic; the key to knowledge unlocks them all. The infinite hovers, crown-like, above him. Reality, virtual or otherwise, belongs to him.',
  },
  {
    id: 2,
    name: 'The High Priestess',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/2 High Priestess.png',
    uprightMeaning:
      'Intuition, sacred knowledge, divine feminine, subconscious mind',
    reversedMeaning:
      'Secrets, disconnected from intuition, withdrawal, silence',
    keywords: ['intuition', 'mystery', 'subconscious', 'wisdom'],
    flavorText:
      'Mae Roberts, the keeper of the secret path, sits beside the waters of consciousness. At her feet, the moon’s reflection reminds her of the hidden truths visible only to her inner sight. Clasping the symbol of cosmic memory, she guards the passage between light and dark, dream and reality.',
  },
  {
    id: 3,
    name: 'The Empress',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/03 The Empress.png',
    uprightMeaning:
      'Femininity, beauty, nature, nurturing, abundance, creativity',
    reversedMeaning: 'Creative block, Inaction, Destruction, Sterility',
    keywords: ['abundance', 'nature', 'nurturing', 'fertility'],
    flavorText:
      'Heasha Mominglade feels the flow of life-magic within her. It encompasses the water of the stream of life, the blood within her veins and the liquid within the cauldron of birth and rebirth. Enthroned upon the world-tree, surrounded by fertile growth and the deep woods of the unconscious mind, she opens herself through the wand of the moon to the feminine principle of cyclic movement. Through her actions, life emerges, resplendent with variety.',
  },
  {
    id: 4,
    name: 'The Emperor',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/4 Tarot Emperor.png',
    uprightMeaning:
      'Authority, establishment, structure, father figure, control',
    reversedMeaning: 'Tyranny, excessive control, Immaturity, inflexibility',
    keywords: ['authority', 'structure', 'control', 'stability'],
    flavorText:
      'The lord of reason, Caeron Mustai, grasps the blade which symbolizes the power of his active will, commanding the forces of his physical and animal natures. Implacable against the darkness, the light of his intellect warms the stark mountains of logic which serve as his field of battle.',
  },
  {
    id: 5,
    name: 'The Hierophant',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/5 The Heirophant.png',
    uprightMeaning:
      'Spiritual wisdom, religious beliefs, conformity, tradition, institutions',
    reversedMeaning:
      'Personal beliefs, unconventionality, unorthodoxy, rebellion',
    keywords: ['tradition', 'conformity', 'spirituality', 'institutions'],
    flavorText:
      'Clothed in ritual and bound by orthodox traditions, the ruler of conventional faith translates the secrets of the cosmic mind into palatable forms. Enthroned at the balance point between all opposites, the revealer of secret knowledge holds the keys to the powers of conscious and unconscious thought.',
  },
  {
    id: 6,
    name: 'The Lovers',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/6 The Lovers.png',
    uprightMeaning:
      'Love, harmony, relationships, values alignment, choices, union',
    reversedMeaning: 'Repulsion, disharmony, imbalance, misalignment of values',
    keywords: ['love', 'union', 'choices', 'harmony'],
    flavorText:
      'Bathed in the emanations of a higher cosmic power, warmed by the radiant life-giving energies of the solar light, they seek the union of opposites. Self and other, carnal and spiritual, knowledge and mystery bear fruit only in the garden of loving intimacy. Unveiled to one another, the Lovers follow the pathway of the senses to inner and outer harmony',
  },
  {
    id: 7,
    name: 'The Chariot',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/7 The Chariot.png',
    uprightMeaning:
      'Control, willpower, success, action, determination, victory',
    reversedMeaning: 'Defeat, collapse, lack of direction, aggression',
    keywords: ['determination', 'victory', 'willpower', 'control'],
    flavorText:
      'Aboard the sky-chariot of his own making, wrested from the welding of science and magic into a unified whole, Jet Boy takes his place among the explorers of the possible. The triumph of mind over matter, of the inner will over the outer world, of the power of thought over the boundaries of consensual reality — all these find expression in the work of the charioteer, the Tellurian’s eternal traveler. He controls the balanced forces of the worlds.',
  },
  {
    id: 8,
    name: 'Strength',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/8 Strength.png',
    uprightMeaning:
      'Inner strength, courage, patience, compassion, self-control',
    reversedMeaning:
      'Self-doubt, weakness, insecurity, low confidence, inadequacy',
    keywords: ['courage', 'patience', 'compassion', 'inner strength'],
    flavorText:
      'The Werewolf: Strengthened by her passions, confident in her spiritual power, she wrestles the bestial and tainted sides of her nature, bringing them into a harmonious whole with her higher self. What is wild and unconscious becomes the wellspring which her creative spirit embraces and tames, even as the roses blossom amidst decay. Fearlessness brings liberation and trust in her own abilities.',
  },
  {
    id: 9,
    name: 'The Hermit',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/9 The Hermit.png',
    uprightMeaning:
      'Soul-searching, introspection, inner guidance, solitude, wisdom',
    reversedMeaning: 'Isolation, foolishness, withdrawal, immaturity, exile',
    keywords: ['solitude', 'introspection', 'guidance', 'wisdom'],
    flavorText:
      'Clothed in the guise of the seeker, he holds aloft the light of truth, illuminating the way for other wayfarers through the bitter night of ignorance. He has blazed the trail to wisdom in silence and contemplation. Now he stands ready to guide the worthy toward the union of will and wisdom',
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/10 Wheel Fortune.png',
    uprightMeaning:
      'Good luck, karma, life cycles, destiny, turning point, fate',
    reversedMeaning:
      'Misfortune, resistance to change, breaking cycles, lack of control',
    keywords: ['destiny', 'cycles', 'change', 'karma'],
    flavorText:
      'The Wheel turns. The chambers revolve. Life and death play out their dance of perpetual motion in the progress toward Ascension. Behind the mask of personality, the eternal self-expands its boundaries in search of higher, more perfect forms. Cause and effect become one in the circumstantial cycles of existence.',
  },
  {
    id: 11,
    name: 'Justice',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/11 Justice.png',
    uprightMeaning: 'Justice, fairness, truth, cause and effect, law, karma',
    reversedMeaning: 'Unfairness, prejudice, bias, dishonesty, injustice',
    keywords: ['justice', 'truth', 'fairness', 'law'],
    flavorText:
      'Framed within the triptych of mind, body and spirit, Raging Eagle holds aloft the two-edged sword of Justice. Guided by knowledge of the balance, the master of the mind seeks first the inner truth, from which outer actions flow.',
  },
  {
    id: 12,
    name: 'The Hanged Man',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/12 The Hanged Man.png',
    uprightMeaning: 'Pause, surrender, letting go, new perspectives, sacrifice',
    reversedMeaning:
      'Arrogance, preoccupation, stalling, indecision, unable to let go',
    keywords: ['surrender', 'perspective', 'sacrifice', 'suspension'],
    flavorText:
      'The Wraith: He hangs suspended before the doorways that separate the physical world from the Shadowlands of the soul. Severed from all connection to matter, he no longer conforms to the limitations of his old existence. Only by surrendering the trappings of identity can he discover the depths of knowledge from which his new pattern will emerge, transcendent and transformed.',
  },
  {
    id: 13,
    name: 'Death',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/13 Death.png',
    uprightMeaning:
      'Endings, change, transformation, transition, letting go, release',
    reversedMeaning: 'Resistance to change, inertia, inner purging',
    keywords: ['transformation', 'endings', 'change', 'transition'],
    flavorText:
      'The game of life and Death is played out before the curtain of mystery, which conceals the knowledge of both past and future. Between the players, the rose of desire arises. Renewal takes many forms; both the siren call of the immortal undead and the transforming power of Awakening emerge from the spirit’s unquenchable restless sea.',
  },
  {
    id: 14,
    name: 'Temperance',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/14 Temperance.png',
    uprightMeaning:
      'Balance, moderation, patience, purpose, meaning, tranquility',
    reversedMeaning:
      'Imbalance, excess, competition, mutation, lack of harmony',
    keywords: ['balance', 'moderation', 'patience', 'harmony'],
    flavorText:
      'Golconda: He rests at the balance point between the peaks of wisdom and understanding, at the end — or the beginning — of the path. Saulot has transcended all conflicting emotions, integrating the unseen and the seen, achieving the synthesis of past and future, spirit and matter. Tempering the essence of life with the flow of conscious and unconscious vision, he resolves all paradox.',
  },
  {
    id: 15,
    name: 'The Devil',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/15 The Devil.png',
    uprightMeaning:
      'Shadow self, bondage, attachment, sensation, temptation, materialism',
    reversedMeaning: 'Freedom, detachment, sexuality, hedonism, understanding',
    keywords: ['bondage', 'materialism', 'addiction', 'shadow'],
    flavorText:
      'Those who serve the spirit of corruption and those who battle its pervasive influence are equally trapped within its destructive coils. Both animal nature and human intelligence are subject to its myriad temptations, bound by the limitations of their own desires. To penetrate its illusionary domination over the sensate world is the first step towards freedom from its grasp',
  },
  {
    id: 16,
    name: 'The Tower',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/16 The Tower.png',
    uprightMeaning:
      'Sudden change, upheaval, renovation, awakening, purification',
    reversedMeaning:
      'Imprisonment, conflict, catastrophe, fear of change, disruption',
    keywords: ['upheaval', 'awakening', 'purification', 'change'],
    flavorText:
      'No Tower built upon false foundations can withstand the raw energy of purification. The ivory fortress of the intellect, the prideful Chantry of ambition, the lonely citadel of the isolated self and the paper constructs of the material world become targets for destruction. Cast into the dimensions of uncertainty, those who dwelt in ignorance must face a new beginning.',
  },
  {
    id: 17,
    name: 'The Star',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/17 The Star.png',
    uprightMeaning:
      'Hope, creativity, insight, innovation, accomplishment, inspiration, confidence',
    reversedMeaning: 'Pessimism, despair, doubt, stubbornness, hopelessness',
    keywords: ['hope', 'creativity', 'innovation', 'inspiration'],
    flavorText:
      'The Umbra: Surrounded by radiant Umbral energy, the eternal maiden pours forth the waters of inspiration into the pool of consciousness, and spills the essence of the five senses onto the Earth’s body, revitalizing both matter and spirit. The meditative phoenix, representative of instinct and the indestructible soul, rises from the manifestation of vital, spontaneous nature, questing toward the enlightenment of the celestial illumination above.',
  },
  {
    id: 18,
    name: 'Luna',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/18 Luna.png',
    uprightMeaning:
      'Intuition, femininity, reflection, subconscious, mystery, enigmas, revelation of the true nature',
    reversedMeaning: 'Deception, repressed emotion, peril, madness, illusion',
    keywords: ['intuition', 'femininity', 'mystery', 'subconscious'],
    flavorText:
      'She surrenders completely to the lure of the unconscious. The realm of dreams becomes a nightmare. Drowning in the blood of her inner beasts, she sinks into the quiet ecstasy of madness. Or is she rising, renewed by her plunge into the depths of imaginative vision, to traverse the two-fold path created by the swords of matter and spirit towards a higher consciousness?',
  },
  {
    id: 19,
    name: 'The Sun',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/19 The Sun.png',
    uprightMeaning:
      'Liberation, fun, warmth, success, vitality, joy, confidence, creation, innovation',
    reversedMeaning: 'Retrogression, depletion, draining',
    keywords: ['innovation', 'creation', 'vitality', 'liberation'],
    flavorText:
      'Ascension: Glorying in his newfound awareness, the enlightened spirit has no further need for the outworn symbols of tradition or the playthings which marked his progress through the material world. Like the sunflowers which turn their faces toward the life-giving sun, the naked child stands, fearless and joyful, in the garden of eternal light.',
  },
  {
    id: 20,
    name: 'Judgement',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/20 Judgement.png',
    uprightMeaning:
      'Judgement, reunion, awakening, perception, reflection, reckoning',
    reversedMeaning: 'Self-doubt, inner critic, Judgmentalism, self-loathing',
    keywords: ['judgement', 'reunion', 'reflection', 'awakening'],
    flavorText:
      'Apocalypse: Liberated from their separate misunderstandings, the children of Gaia unite and transform. Transcending all limitations, the perceptive spirit reaches for eternity. Called forth to a new Awakening, they ascend into mystery, becoming one with the universal consciousness.',
  },
  {
    id: 21,
    name: 'Gaia',
    arcana: 'major',
    imagePath: '/assets/mage/majorArcana/21 Gaia.png',
    uprightMeaning:
      'Fulfillment, completion, integration, accomplishment, wholeness, fulfillment, totality, unification, environment',
    reversedMeaning: 'Incompletion, sloth, limitation, restriction, negation',
    keywords: ['completion', 'accomplishment', 'fulfillment', 'totality'],
    flavorText:
      'The vision has become the reality. Centered within the circle of all that is, the cosmic dance both creates and defines itself. Gaia is never-ending, always-changing, the mirror of the self-aware consciousness of all within and without Her. The promise is fulfilled, and the material world has become one with the spiritual',
  },
];

export const questingCards: TarotCard[] = [
  {
    id: 22,
    name: 'Ace of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/1 Ace of Questing.png',
    uprightMeaning:
      'Birth, creativity, awakening, self-realization, beginnings, questing',
    reversedMeaning:
      'Setback, lack of direction, unfocused energy, false start',
    keywords: ['awakening', 'creativity', 'birth', 'questing'],
    flavorText:
      'All things spring forth from the fires of the imagination. To the oft-forgotten mages of the lost Tradition, the union of the Spheres, the oneness of creation and the perpetual dance of opposing forces are matters of doctrine, not supposition. The burning bush, the ever-renewing phoenix and the celestial explosion that signaled the beginning of the solar system are but echoes reverberating from the flames of the Questing spirit.',
  },
  {
    id: 23,
    name: 'Two of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/2 of Questing.png',
    uprightMeaning:
      'Dominance, making decisions, balancing paradigms, choosing your path, power, unification',
    reversedMeaning: 'Submission, indecision, avoidance, suffering',
    keywords: ['dominance', 'choices', 'balance', 'discovery'],
    flavorText:
      'Within her grasp lies a city of light and harmony; outside, all is darkness and tumult. Both cities are her dominion. It is in her power to channel her energy, the Sphere of Forces, to bring illumination to the world around her. Likewise, her Art may plunge the city into eternal night. The power to upset or maintain the balance resides in the twin centers of will and heart.',
  },
  {
    id: 24,
    name: 'Three of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/3 of Questing.png',
    uprightMeaning: 'Virtue, progress, foresight, exploration, cooperation',
    reversedMeaning: 'Treachery, lack of vision, disappointment, frustration',
    keywords: ['virtue', 'foresight', 'exploration', 'progress'],
    flavorText:
      'With his blessing, the ships of his people set out across the unknown sea. Now they return, perhaps with news of other lands, other people. He knows their journey was fruitful. Journeys of exploration always bring forth knowledge. The promise of the sun and the flames of his vision are surety of his belief. He stands between the twin poles of life and death, war and peace, past and future. He holds aloft the rod of the Questing spirit, and welcomes what the day has brought.',
  },
  {
    id: 25,
    name: 'Four of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/4 of Questing.png',
    uprightMeaning:
      'Celebration, wholeness, triumph, harmony, festival, initiation',
    reversedMeaning:
      'Harmony of the lesser things in life, repression, disharmony, restriction',
    keywords: ['celebration', 'wholeness', 'stability', 'community'],
    flavorText:
      'The flames of ecstasy rise high into the air, companions to the song of celebration. Atop the arch of perfected work, the skeletons of old ideas merge their essence with the roses of purity and the common flowers of material sensations. The joining of animal and human natures in a paean to spiritual perfection crosses all boundaries of Time and space, Awakening the sleeping world to the possibilities of change.',
  },
  {
    id: 26,
    name: 'Five of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/5 of Questing.png',
    uprightMeaning:
      'Strife, conflict, competition, tension, disagreement, anxiety, frustration',
    reversedMeaning: 'Contradiction, complication, restriction, restraint',
    keywords: ['strife', 'conflict', 'competition', 'tension'],
    flavorText:
      'A common goal does not preclude a conflict of wills. Without a clear-cut leader, even the most knowledgeable seekers wander in strange directions to aimless purposes. Who’s in charge here? The beams of light illumine only what is in their path. Getting back to the right direction is essential for fruitful achievement, particularly when Correspondence is your goal.',
  },
  {
    id: 27,
    name: 'Six of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/6 of Questing.png',
    uprightMeaning:
      'Victory, recognition, achievement, success, advancement, expansion',
    reversedMeaning:
      'Fall from grace, ego, lack of recognition, hollow victory',
    keywords: ['victory', 'recognition', 'success', 'expansion'],
    flavorText:
      'He sits astride a metal steed, surrounded by those who would hail his dark victory. The candles of his acolytes light the warrior’s path through the darkness of ignorance and superstition. From them, he draws his strength, for they burn with Life-giving radiance.',
  },
  {
    id: 28,
    name: 'Seven of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/7 of Questing.png',
    uprightMeaning:
      'Valor, purpose, courage, energy, perfection, vision, value',
    reversedMeaning:
      'Cowardice, anxiety, indecision, exhaustion, overwhelmed, giving up',
    keywords: ['valor', 'purpose', 'courage', 'determination'],
    flavorText:
      'To conquer one’s self is to win the greatest battle and to show the greatest courage. Fall Breeze contemplates her struggle for perfection of mind, body and spirit. Her mind opens outward, fanlike, to embrace the Questing spirit, and like the fan, she possesses both exquisite fragility and deadly keenness. Her weapon extends her prowess, becoming the focus for her inner strength and the power of her Mind.',
  },
  {
    id: 29,
    name: 'Eight of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/8 of Questing.png',
    uprightMeaning:
      'Motion, swiftness, progress, journey, ideas, problem-solving, things falling into place',
    reversedMeaning:
      'Delays, frustration, resistance, hasty decisions, lack of direction',
    keywords: ['motion', 'swiftness', 'ideas', 'progress'],
    flavorText:
      'The secrets of the material world, of Matter in motion, fall to his Questing spirit. He takes flight, fueled by the energy released by the death of the old and the birth of the new. Guided by both knowledge and instinct, following the moon’s reflected inner light, he seeks the distant stars, symbols of the laws which govern the physical world, at last within his grasp.',
  },
  {
    id: 30,
    name: 'Nine of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/9 of Questing.png',
    uprightMeaning:
      'Spirit, fortitude, persistence, vision, standing strong, unlimited strength',
    reversedMeaning: 'Paranoia, obstacle, adversity, opposition',
    keywords: ['spirit', 'fortitude', 'persistence', 'strength'],
    flavorText:
      'The vigil of the Spirit warrior is eternal. The guardian waits beyond the barricade erected by those who would conquer the natural and mystic worlds, ready to offer his vision of peace, yet mindful that the war is not yet over. Though the trees of life and knowledge stand burnt and defiled, though the wildness of the world be impaled upon the spear of progress, the power of the eagle’s keen perceptions endows him with unceasing courage.',
  },
  {
    id: 31,
    name: 'Ten of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/10 of Questing.png',
    uprightMeaning:
      'Oppression, burden, trial, ruin, disruption, failure, limitations, restrictions, holding back',
    reversedMeaning:
      'Duplicity, separation, loss, breakdown, inability to cope',
    keywords: ['burden', 'restrictions', 'trial', 'opression'],
    flavorText:
      'Suspended by the chains of ignorance, silenced by the cruel mask of disbelief, he bears the weight of his captivity. Without the will to break free of the bars of physical limitations and false perceptions, the Questing spirit withers in its own Entropic prison.',
  },
  {
    id: 32,
    name: 'Page of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/11 Page of Questing.png',
    uprightMeaning:
      'Brilliance, inspiration, learning, enthusiasm, curious student, self-liberation, release of fear, spontaneous expression, adventure, discovery',
    reversedMeaning:
      'Procrastination, indecision, scattered energy, unpleasantness',
    keywords: ['inspiration', 'enthusiasm', 'curiosity', 'adventure'],
    flavorText:
      'The Apprentice stands upon the threshold of a new awareness. Below her lie the bones of past lives, past deaths, past fears and past awakenings. Within her stirs the call to adventure; before her and behind her, strange horizons beckon. Clad in the brilliant robes of pure intent, she holds the symbol of her triumph over the limitations of mortality. The evolution of the spirit begins.',
  },
  {
    id: 33,
    name: 'Knight of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/12 Knight of Questing.png',
    uprightMeaning:
      'Energy, impetuousness, passion, expansion, haste, inspired creativity, expression, concentration',
    reversedMeaning: 'Division, frustration, discord, departure',
    keywords: ['conflict', 'passion', 'expansion', 'haste'],
    flavorText:
      'The Disciple: Driven by the Questing spirit, John Courage departs upon a journey of self-discovery and inner conflict. For him, the Wheel of Fortune has become a backward carousel of ever-changing circumstances, loyalties and motivations. His only consistency, the axis upon which his pilgrimage to Ascension revolves, is the quest itself',
  },
  {
    id: 34,
    name: 'Queen of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/14 Queen of Questing.png',
    uprightMeaning:
      'Control, aspiration, command, attraction, honor, self-knowledge, transformation, self-reclamation, fluidity, growth, quick temper',
    reversedMeaning: 'Opposition, jealousy, chastity, enterprise',
    keywords: ['Control', 'aspiration', 'command', 'attraction'],
    flavorText:
      'The Adept: She rules. Above her, transcendent reality emerges from the fires of her imagination. Below her, desire lies nascent in the half-tamed depths of her subconscious. The symbol of her rulership rests easily in her hands, its weight no longer a burden but a comforting presence. The harshness of her metal crown, like her “Bitch Queen” façade, exerts its own attraction. Just as the sunflower must follow the sun, so must others follow her.',
  },
  {
    id: 35,
    name: 'King of Questing',
    arcana: 'minor',
    suit: questingSuit,
    imagePath: '/assets/mage/questing/13 King of Questing.png',
    uprightMeaning:
      'Authority, Purpose, leadership, fatherhood, vision, intuition, evolution, boldness, inspiring, charismatic',
    reversedMeaning: 'Ruthless, tyrant, arrogant, severity, subordination',
    keywords: ['authority', 'leadership', 'vision', 'charisma', 'boldness'],
    flavorText:
      'The Master: Herein lies the culmination of the quest. Surrounded by the outward trappings of his power, Porthos rests secure, conscious that all he sees is under his dominion, yet mindful of the price that he has paid for his knowledge. His fatherly authority of the price that he has paid for his knowledge. His fatherly authority arises from the total acceptance of all that he has been, all that he has learned. Experience, distilled through lifetimes of inner searching, lies within his grasp. He awaits only the fires of inspiration to embark upon the ultimate Awakening.',
  },
];

export const primordialismCards: TarotCard[] = [
  {
    id: 36,
    name: 'Ace of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/1 Ace of Primordialism.png',
    uprightMeaning:
      'Breakthrough, feeling, emotional beginning, creative flow, life-force, open heart, trusting heart, spiritual heart, expression',
    reversedMeaning:
      'Emotional loss, sadness, pain, unrequited love, repressed emotions, infertility, breakups,',
    keywords: ['emotion', 'intuition', 'love', 'creativity'],
    flavorText:
      'Thrust forth from the Primordial ooze, the hand of creation and destruction grasps the vessel of the mind. Substance without form, life without cohesion, motion without direction, the fertile spawning pool awaits the birth of self-awareness.',
  },
  {
    id: 37,
    name: 'Two of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/2 of Primordialism.png',
    uprightMeaning: 'Reflection, symbiosis, carnality, passion, love',
    reversedMeaning: 'Passion, union, partnership, mutual respect, balance',
    keywords: ['reflection', 'carnality', 'attraction', 'passion'],
    flavorText:
      'Alone before the mirror of her instincts, she confronts the depths of her desires. Her passions flow in two directions, merging inner lusts and outer ambitions, forming the watery basis of unconscious knowing. She contemplates the self, joining with her carnal nature in an unspoken pledge to rapturous sensation.',
  },
  {
    id: 38,
    name: 'Three of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/3 of Primordialism.png',
    uprightMeaning:
      'Carnality, pleasure, overindulgence, abundance, excess, community',
    reversedMeaning: 'Celebrations, happy times, liberality, happiness',
    keywords: ['celebration', 'carnality', 'overindulgence', 'community'],
    flavorText:
      'Unhampered by the dictates of convention, three weird sisters revel in their wanton sensuality. Beneath their feet, the twisted form engendered by their gross imaginings gropes mindlessly for sustenance amid the barren wilderness of their ruined glory. The nurturing fluid of unfulfilled creativity festers within the broken shells of self-indulgence.',
  },
  {
    id: 39,
    name: 'Four of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/4 of Primordialism.png',
    uprightMeaning:
      'Dissipation, contemplation, apathy, reevaluation, discontent, ennui',
    reversedMeaning: 'Novelty, contemplation, wonder, seizing opportunities',
    keywords: ['contemplation', 'apathy', 'reevaluation', 'discontent'],
    flavorText:
      'The pleasures of the world remind him only of his own mortality. Entrenched within his own dissatisfaction, the sated wastrel shuns the proffered cup of secret knowledge, immune to the headiness of its bestial temptations. He has drained the sensate realm of everything it has to offer; neither mind nor spirit provide respite from the bleakness of his aimless destiny.',
  },
  {
    id: 40,
    name: 'Five of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/5 of Primordialism.png',
    uprightMeaning:
      'Disillusionment, vulnerability, loss, sorrow, disappointment, regret, fragility, depression',
    reversedMeaning: 'Recovery, acceptance, hope, forgiveness',
    keywords: ['disillusionment', 'sorrow', 'regret', 'disappointment'],
    flavorText:
      'Bitter with experience gone to waste, the Primordial spirit gazes in despair upon the gutted ruins of expectation. Having tasted loss and drunk the wine of unfulfilled dreams, the prospect of unsampled pleasures holds no temptation for him. The river of sub consciousness has been forded, but the barren landscape beyond is devoid of promise.',
  },
  {
    id: 41,
    name: 'Six of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/6 of Primordialism.png',
    uprightMeaning:
      'Initiation, nostalgia, memories, opportunity, regeneration, revitalization, ecstasy',
    reversedMeaning: 'Retirement, ending, stuck in the past, stagnation',
    keywords: ['nostalgia', 'memories', 'initiation', 'opportunity'],
    flavorText:
      'Ripped from his unthinking, Primordial past and thrust into the heart of an alien existence, Jubuka offers sacrifices for his initiation into a world of new opportunities. Surrounded by the familiar trappings of his old life, scarred by the transition, yet hungry for new sensations, he seeks revitalization from the blighted flower that falls from civilization’s twisted tree of knowledge.',
  },
  {
    id: 42,
    name: 'Seven of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/7 of Primordialism.png',
    uprightMeaning:
      'Temptation, indulgence, selfishness, illusion, fantasy, wishful thinking, debauchery, addiction, promiscuity',
    reversedMeaning: 'Clarity, determination, focus, decisiveness',
    keywords: ['temptation', 'illusion', 'indulgence', 'debauchery'],
    flavorText:
      'Overwhelmed by illusionary possibilities, unable to choose between desires, temptation’s victim loses his sense of self in the contemplation of dreams and phantasms. Responding to the forces pulling from all directions, his awareness has transformed itself into a glutton for sensation. Like a black hole in the universe, the dreamer exists only in the definition of his dreams.',
  },
  {
    id: 43,
    name: 'Eight of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/8 of Primordialism.png',
    uprightMeaning:
      'Abandonment, letting go, rejection, misery, stagnation, reaching limits, depletion, exhaustion, aimlessness, retreat',
    reversedMeaning: 'Joy, merriment, acceptance',
    keywords: ['abandonment', 'letting go', 'retreat', 'stagnation'],
    flavorText:
      'Past achievements have lost their meaning, but abandonment brings with it a sense of liberation. The Primordial spirit turns its back upon the skeletal remains of knowledge sought, savored and set aside. Grasping the distillation of the essence of experience, he sets forth upon an uncharted course, following the jagged road that leads to the unknown.',
  },
  {
    id: 44,
    name: 'Nine of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/9 of Primordialism.png',
    uprightMeaning:
      'Attainment, completion, contentment, success, happiness, health, opportunity, expansion, fulfillment, well-being',
    reversedMeaning: 'Dissatisfaction, imperfection, overindulgence',
    keywords: ['attainment', 'fulfillment', 'success', 'fulfillment'],
    flavorText:
      'Devoured by the fulfillment of her wishes, she slumps before the fruits of her attainment. The desired traps of material comfort — sensual pleasure, abundance, well-being and happiness — all now depend upon the black tide of her continued success. Opportunity is assured, but satisfaction lies elsewhere.',
  },
  {
    id: 45,
    name: 'Ten of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/10 of Primordialism.png',
    uprightMeaning:
      'Satiety, satisfaction, emotional contentment, vitality, expressiveness, energy, enthusiasm harmony, happiness, family',
    reversedMeaning: 'Wanting, need, lack',
    keywords: ['satiety', 'happiness', 'energy', 'satisfaction'],
    flavorText:
      'They dance, O how they dance! They have plunged themselves into the depths of their desires, surrendering to the serpentine rhythms of the danse macabre. Entrapped by their sensations, ravished by their transformation into vehicles of consummate passion, their Primordial journey is complete.',
  },
  {
    id: 46,
    name: 'Page of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/11 Page of Primordialism.png',
    uprightMeaning:
      'Rebirth, possession, intuitive messages, curiosity, emotional objectivity and detachment, controlling, bears messages from dreams',
    reversedMeaning: 'Deception, obstacle, inaction',
    keywords: ['rebirth', 'possession', 'controlling', 'curiosity'],
    flavorText:
      'Within the womb of Primordial emotion, a new awareness comes into being. Nurtured by the blood of countless sacrificial offerings, the child of raw sensation finds herself transformed into corruption’s willing servant. Mindless energy coalesces in the uterine darkness, waiting for the moment of its emergence.',
  },
  {
    id: 47,
    name: 'Knight of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/12 Knight of Primordialism.png',
    uprightMeaning:
      'Emotion, bestiality, desire, passion, bliss, charm, idealism, dream, following the heart',
    reversedMeaning: 'Moodiness, jealousy, subtlety, fraud, rivalry, nightmare',
    keywords: ['Emotion', 'charm', 'desire', 'bliss'],
    flavorText:
      'The Beast rides upon the waves of its own emotions, submerging all thoughts of its distant humanity in the roiling seas of Primordial sub consciousness. Both messenger and message, it carries promises of bliss within its cup of dreams and nightmares. Loosing the thrashing remnants of former desires into the hearts of all who hear its call, it clears the way ahead for future bestial visions. ',
  },
  {
    id: 48,
    name: 'Queen of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/14 Queen of Primordialism.png',
    uprightMeaning:
      'Imagination, perversity, emotional integrity, self-reflection, intuition, new form, new identity, new life, expressing oneself without blame or judgment',
    reversedMeaning: 'Perversity, dishonesty, immorality',
    keywords: ['imagination', 'self-reflection', 'intuition', 'Perversity'],
    flavorText:
      'Jodi Blake, imagination’s queen, salutes the riot of her cacophonous visions. Her perversity is the key to her freedom from all limitations. In her hands, the instrument of pain becomes the doorway to deliverance from mundane constraints. Through acting out her desires, she makes them real, and her goblet is filled with the distillation of these unhampered dreams.',
  },
  {
    id: 49,
    name: 'King of Primordialism',
    arcana: 'minor',
    suit: primordialismSuit,
    imagePath: '/assets/mage/primordialism/13 King of Primordialism.png',
    uprightMeaning:
      'Power, vanity, spontaneity, ego, generosity, responsibility, emotional balance, diplomacy, wisdom, calm control',
    reversedMeaning:
      'Violence, injustice, weakness, manipulation, emotional coldness, volatility',
    keywords: ['balance', 'compassion', 'diplomacy', 'wisdom'],
    flavorText:
      'From his throne room deep beneath the seas, Galarius, Master of the Labyrinth of Drachus Vachor, watches the ripples of his power roil throughout his watery domain. For him, the sea of the subconscious is the font of all creation and destruction. Crowned with the symbol of the ocean’s insensate life, he holds in one hand the scepter of his power to influence the world of thought. His other hand supports the reflection of his subtle rule.',
  },
];

export const dynamismCards: TarotCard[] = [
  {
    id: 50,
    name: 'Ace of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/1 Ace of Dynamism.png',
    uprightMeaning:
      'Knowledge, innovation, breakthrough, clarity, sharp mind, inventiveness, originality',
    reversedMeaning: 'Confusion, misinformation, disaster, ignorance',
    keywords: ['breakthrough', 'clarity', 'Knowledge', 'originality'],
    flavorText:
      'Emerging from the storm-filled skies to ground itself in the rippling sands of knowledge, the taloned hand of chaos and instability grasps the sword of activation. Driven by no quest save its own unmotivated energy, impelled by no emotion other than the desire to carve a mark upon the universe, the keen-edged symbol of the power of change severs the veil that hides the secrets of the world.',
  },
  {
    id: 51,
    name: 'Two of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/2 of Dynamism.png',
    uprightMeaning:
      'Precariousness, resolution, difficult decisions, treachery, blindness, peace, integrative mind',
    reversedMeaning: 'Balance, stalemate, impotence, truce, release',
    keywords: ['decisions', 'precariousness', 'resolution', 'blindness'],
    flavorText:
      'Poised precariously upon the shaky structure of a divided consciousness, Miss Zhao has chosen the path of inner sight. Rejecting a world she no longer recognizes, she holds aloft the twin swords of creation and destruction. An unguarded movement by either sword will cut the cord from which depends the lantern of illumination, plunging it into the murky depths of the unconscious.',
  },
  {
    id: 52,
    name: 'Three of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/3 of Dynamism.png',
    uprightMeaning:
      'Sorrow, separation, upheaval, negativity, triangles, limited view, focusing on the past, jealousy',
    reversedMeaning: 'Compromise, disorder, confusion, delay',
    keywords: ['separation', 'sorrow', 'jealousy', 'quiet'],
    flavorText:
      'Severed from all save the anchoring rope of Dynamic flux, the abused consciousness suffers the threefold agonies of its loss of connection to spirit, mind and body. Limited by its ruptured viewpoint, the dangling awareness can focus only on its past sorrows and future upheavals.',
  },
  {
    id: 53,
    name: 'Four of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/4 of Dynamism.png',
    uprightMeaning: 'Reality, convalescence, quiet, truce, rest, repose',
    reversedMeaning:
      'Solitude, repose, economy, precaution, circumspection, exile',
    keywords: ['reality', 'repose', 'convalescence', 'quiet'],
    flavorText:
      'Doomed to an existence in which he perpetually defends the constructs of imagination’s realms, the self-appointed counselor of the damned and the forgotten seeks his repose after strife. Above Barrister Martins’ quiescent form, the swords which symbolize the rigors of the law hang suspended. He rests upon the bier of his own reality, built—stone by stone — from his private vision. In solitude, he keeps his lonely vigil.',
  },
  {
    id: 54,
    name: 'Five of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/5 of Dynamism.png',
    uprightMeaning:
      'Empty victory, degradation, unfairness, constriction, fear, distortion, dishonor, loss',
    reversedMeaning: 'Conquest, threat, menace',
    keywords: ['conflict', 'dishonor', 'unfairness', 'loss'],
    flavorText:
      'Her victory is a hollow one, gained without honor. Smiling in malice, she surveys the tokens of her conquest, the weapons of her departing foes. Some inner urge compels her to wallow in the degradation of her enemies. The uncontrolled hostility she embodies takes no thought for consequences.',
  },
  {
    id: 55,
    name: 'Six of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/6 of Dynamism.png',
    uprightMeaning:
      'Passage, synthesis, journey, travel, rationality, objectivity',
    reversedMeaning:
      'Stalemate, failure, obstacles, difficulties, delay, blockage',
    keywords: ['synthesis', 'journey', 'objectivity', 'passage'],
    flavorText:
      'Steering a path between the choppy waves of activity and the calm waters of contemplation, Stephen of Warwick sets forth upon a journey of deliverance. His charges, too frail to exist inside reality’s constraints, seek a new sanctuary beyond the world’s horizon. The Dynamic spirit moves upon the surface of the waters, seeking passage to an understanding of the balance.',
  },
  {
    id: 56,
    name: 'Seven of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/7 of Dynamism.png',
    uprightMeaning:
      'Deception, betrayal, futility, unreliability, sneakiness, strategy, sabotage, lies, cunning',
    reversedMeaning: 'self-deceit, counsel, instruction, conscience',
    keywords: ['deception', 'betrayal', 'sneakiness', 'cunning'],
    flavorText:
      'She walks the tightrope of Dynamic change, uncertain of either starting point or destination. Unsteadiness prevents her from recovering the knives of stolen knowledge she hoped would assist her on the Path to her soul’s development. To cease her forward motion is to plummet into futility, while turning back leads only to failure.',
  },
  {
    id: 57,
    name: 'Eight of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/8 of Dynamism.png',
    uprightMeaning:
      'Crisis, captivity, trapped, restricted, indecision, restriction, censure, doubt, mistrust, overanalytical mind, confusion, interference',
    reversedMeaning: 'Self-acceptance, freedom, release, new perspective',
    keywords: ['trapped', 'restricted', 'captivity', 'overanalytical'],
    flavorText:
      'Surrounded by the weapons of violent change, captured in the twisted bonds of convoluted thought, she has become the victim of her own demented inquisition. The mask of indecision blinds her. Although her mind has analyzed her options, doubt and mistrust undermine her escape. Overwhelmed by the crisis of her dilemma, she cannot break free of the constraints of her fevered imagination.',
  },
  {
    id: 58,
    name: 'Nine of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/9 of Dynamism.png',
    uprightMeaning:
      'Despair, suffering, worry, desolation, disaster, self-criticism, mental cruelty, nightmares',
    reversedMeaning:
      'Suspicion, doubt, shame, imprisonment, desolation, misery',
    keywords: ['suffering', 'worry', 'despair', 'nightmares'],
    flavorText:
      'Nightmares of disaster haunt her sleep. Awakening, she faces only further intimations of her desolate existence. Without hope of respite or surcease, she rests uneasily upon the bed of her mortality, burdened by the violent demands of her Dynamic calling. The way of the Marauder leads as easily to despair as to enlightenment.',
  },
  {
    id: 59,
    name: 'Ten of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/10 of Dynamism.png',
    uprightMeaning:
      'Ruin, failure, collapse, pain, fear of ruin, despair, desolation, paradox',
    reversedMeaning: 'Advantage, Profit, Impermanence, Delusion survival',
    keywords: ['despair', 'ruin', 'collapse', 'paradox'],
    flavorText:
      'The ruined carcass of delusion, pierced by the destructive instruments of change, surrenders to desolation. Overseen by the mountains of wisdom and understanding, fallen beneath the storm which will break down its outworn forms and failures, the mind forswears its illusions. Paradoxically, the end of one reality betokens the beginning of another.',
  },
  {
    id: 60,
    name: 'Page of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/11 Page of Dynamism.png',
    uprightMeaning:
      'Aggression, battle, activation, ferociousness, practical tangible thinking, acting upon ideas',
    reversedMeaning:
      'Naïveté, unreadiness, laxity, slackness, illness, unforeseen, all talk no action, lack of planning',
    keywords: ['aggression', 'battle', 'activation', 'ferociousness'],
    flavorText:
      'He stands as a buffer between the world of the mind and the concrete structures of external reality. Ready to do battle with those who would threaten his cherished beliefs, he grasps the Dynamic symbol of his aggression. He is imagination’s sentinel, the vanguard of active expression rather than passive thought.',
  },
  {
    id: 61,
    name: 'Knight of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/12 Knight of Dynamism.png',
    uprightMeaning:
      'Impulsiveness, wrath, courage, intuitive thinking, unrestricted mind, action',
    reversedMeaning:
      'Extravagance, braggadocio, recklessness, unfocused energy',
    keywords: ['action', 'wrath', 'assertiveness', 'courage'],
    flavorText:
      'Descending from the cloud-filled sky, the Dragon of Dynamism visits destruction upon the pitiful fruits of prideful creation, bathing the mundane world in the flames of its purifying spirit. The mighty serpent does not always temper its impulsive nature with the wisdom of forethought and planning. Instead, it rushes headlong into conflict, heedless of the consequences of its actions.',
  },
  {
    id: 62,
    name: 'Queen of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/14 Queen of Dynamism.png',
    uprightMeaning:
      'Perception, observation, confidence, rational, objective, consulting intelligence, independence, unbiased judgment',
    reversedMeaning:
      'narrow-mindedness, intolerance, bigotry, artifice, prudery, lack of empathy, harsh',
    keywords: ['independence', 'perception', 'objective', 'unbiased'],
    flavorText:
      'The visions of her bloody past merge with her perceptions of the future. Crowned with the symbols of immortality, Medea sits upon her skyborne throne surrounded by her airy messengers of thought. Made wise through suffering, tempered by the knowledge of her imperfections, she observes the world below her through eyes maddened by the clarity of her penetrating mind.',
  },
  {
    id: 63,
    name: 'King of Dynamism',
    arcana: 'minor',
    suit: dynamismSuit,
    imagePath: '/assets/mage/dynamism/13 King of Dynamism.png',
    uprightMeaning:
      'Judgment, determination, clarity, counsel, wisdom, focus, intention, concentration',
    reversedMeaning:
      'Manipulation, cruelty, injustice, barbarity, tyranny, irrational',
    keywords: ['wisdom', 'judgment', 'counsel', 'intention'],
    flavorText:
      'Sheltered in a world of his own imaginings, Robert Davenport dwells within a happier time. The spirits of his past tantalize him, while the sylph of knowledge whispers of his intentions. In his domain, his will is absolute, his authority unquestioned. Crowned by the roses of his desires, he contemplates immortality within his own mind, wherein he holds command over life and death, for he has judged reality and found it wanting.',
  },
];

export const patternCards: TarotCard[] = [
  {
    id: 64,
    name: 'Ace of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/1 Ace of Pattern.png',
    uprightMeaning:
      'Prosperity, inheritance, success, production, practical organization, manifestation, abundance, security, opportunity',
    reversedMeaning: 'Corruption, excess, surplus',
    keywords: ['opportunity', 'prosperity', 'production', 'security'],
    flavorText:
      'Breaking free from the aimless flux of change without direction, order imposes its Pattern upon the world. Material prosperity becomes the center for a new beginning, stamped with the imprint of stability and measured attainment. Hidden forces tighten their grip on reality, casting their shadows on the shape of things to come.',
  },
  {
    id: 65,
    name: 'Two of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/2 Pattern.png',
    uprightMeaning: 'Balance, adaptability, harmony, stability, adaptability',
    reversedMeaning: 'Imbalance, opposition, flux, fluctuation, vicariousness',
    keywords: ['balance', 'adaptability', 'harmony', 'stability'],
    flavorText:
      'Without balance, Patterned existence falls prey to inner corrosion. The lightning flash of inspiration, harnessed by the will worker’s determination, maintains spiritual and physical manifestations in delicate equilibrium. Only constant motion provides the appearance of static harmony; one false step, one hasty speculation, and the dance of power dissolves into chaos.',
  },
  {
    id: 66,
    name: 'Three of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/3 Pattern.png',
    uprightMeaning:
      'Effort, construction, persistence, tenacity, priorities, commitments, focus, intention, direction',
    reversedMeaning: 'Mediocrity, pettiness, obstruction, lack of cooperation',
    keywords: ['effort', 'construction', 'persistence', 'direction'],
    flavorText:
      'Superimposing a new vision upon the traditions of the past, the artisan of order directs her talents to the mastery of her environment. The guardians of material progress keep vigilant watch over her painstaking effort. Under her skilled ministrations, the construction of a threefold utopia of body, mind and spirit comes into being.',
  },
  {
    id: 67,
    name: 'Four of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/4 Pattern.png',
    uprightMeaning:
      'Inheritance, security, greed, solidity, miserliness, power, vitality, forcefulness, empowerment, possessiveness',
    reversedMeaning: 'Setback, loss, poverty, legacy',
    keywords: ['security', 'inheritance', 'solidity', 'power'],
    flavorText:
      'From his perch at the center of his universe, Void Engineer Ambrose Channing seeks to fathom the secrets of the cosmos and unlock the mystery of the physical world. As the inheritor of the twin powers of logic and reason, his mind perceives the subtle forms within the Grand Pattern of perceivable reality. It is a vision worth sharing only with those worthy of receiving its overwhelming legacy.',
  },
  {
    id: 68,
    name: 'Five of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/5 Pattern.png',
    uprightMeaning:
      'Impoverishment, anxiety, destitution, loss, loneliness, limitations, concern, preoccupation',
    reversedMeaning: 'Companionship, success, spirituality',
    keywords: ['loss', 'impoverishment', 'destitution', 'concern'],
    flavorText:
      'Impoverished in mind, body and soul, the victim of the chains of spiritless reality stands before the face of pitiless intellect within the dark circle of his own making. Preoccupied by his physical limitations, lacking the inner illumination that would lift him to Ascension, he merely endures, rather than seeking to understand.',
  },
  {
    id: 69,
    name: 'Six of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/6 Pattern.png',
    uprightMeaning:
      'Philanthropy, gifts, generosity, sharing, charity, attainment, accomplishment, productivity',
    reversedMeaning: 'Avarice, unfairness, envy, debt',
    keywords: ['generosity', 'charity', 'sharing', 'philanthropy'],
    flavorText:
      'Seeking to share the benefits of his Technocratic vision, the devotee of Pattern whets the appetite of others with the fruits of his own material success. Caretaker of the Sleepers, endowed with a sense of justice and the desire to uplift the ragged Masses, the concerned Technomancer acts as philanthropist both for the benefit of the recipient and for his own sense of self-worth. His actions are the proof of his attainment.',
  },
  {
    id: 70,
    name: 'Seven of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/7 Pattern.png',
    uprightMeaning:
      'Re-evaluation, long-term view, perseverance, investment, stress, reward',
    reversedMeaning:
      'Impatience, indecision, failure, fear of success, delay, uncertainty, fear of failure',
    keywords: ['stress', 'perseverance', 'investment', 'reward'],
    flavorText:
      'His work all but complete, momentary indecision leads to the partial loss of Chain’s precious stores. Constant re-evaluation of the forces surrounding him forms a necessary part of his drive toward completion of his goals. The fear of success is as costly as the fear of failure, and in the heat of the moment, one can be mistaken for the other.',
  },
  {
    id: 71,
    name: 'Eight of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/8 Pattern.png',
    uprightMeaning:
      'Skill, employment, skill development, hard work, dedication, craftsmanship, artistry, mastery, attention to detail, organization, centeredness',
    reversedMeaning:
      'Ineptitude, inability, lethargy, lack of focus, mediocrity, wasted effort',
    keywords: ['skill', 'dedication', 'mastery', 'craftsmanship'],
    flavorText:
      'Centered upon his appointed task, enhanced by the grafting of technological precision to the creative mind, the artisan of Pattern focuses on the precise replication of his orderly designs. Awaiting completion, the object of his perfected efforts is nothing less than the total blend of matter and spirit.',
  },
  {
    id: 72,
    name: 'Nine of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/9 Pattern.png',
    uprightMeaning:
      'Gain, profit, self-sufficiency, financial independence, prudence, benefit, balance, order, organization, unification',
    reversedMeaning:
      'Loss, roguery, dissipation, imprudence, incompletion, superficiality',
    keywords: ['gain', 'profit', 'independence', 'prudence'],
    flavorText:
      'She extracts the vital essences from the lushness of her material surroundings. Within her protected environment of abundant growth, she rests secure in the knowledge that all she surveys is under her control. Through prudence and discernment, she has gathered the material benefits of a Patterned existence.',
  },
  {
    id: 73,
    name: 'Ten of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/10 Pattern.png',
    uprightMeaning:
      'Stability, wealth, family, legacy, riches, abundance, prosperity, enrichment',
    reversedMeaning:
      'Financial failure, debt, instability, misfortune, risk, gambling',
    keywords: ['wealth', 'legacy', 'family', 'stability'],
    flavorText:
      'Raising his glass in a toast to the success of his vision, the autocrat of Pattern sees the culmination of all for which he has so zealously striven. His patriarchal rule ensures the material wellbeing of those who embrace his orderly philosophy. Under his ministrations, animal instinct is harnessed to the will of the mind. Stability is assured.',
  },
  {
    id: 74,
    name: 'Page of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/11 Page of Pattern.png',
    uprightMeaning:
      'Perseverance, manifestation, new venture, goals, ambition, planning, diligence, creativity',
    reversedMeaning: 'Lack of progress, procrastination, prodigality',
    keywords: ['manifestation', 'perseverance', 'ambition', 'planning'],
    flavorText:
      'Despite the barrenness of her surroundings, Void Engineer Karen Brewster draws sustenance for her belief in the cosmic order from the radiant energy of the stars above her. In one hand, she holds the secret to the Pattern of the universe. Her other hand is filled with unanswered questions. She stands upon the brink of a new awareness; her diligence awaits its reward.',
  },
  {
    id: 75,
    name: 'Knight of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/12 Knight of Pattern.png',
    uprightMeaning:
      'Reliability, efficiency, routine, conservatism, methodical, patience, methodicity, physicality, solidity',
    reversedMeaning:
      'Carelessness, inertia, idleness, stagnation, obsessiveness, perfectionism, stuck in routine, lack of imagination,',
    keywords: ['efficiency', 'routine', 'methodicity', 'reliability'],
    flavorText:
      'Within his cybernetic spirit, the reliability of the machine enhances the ingenuity of the man to form a dedicated guardian of Pattern. The Cyberknight of Iteration X rests patiently upon his mechanized steed, ever vigilant and ready to assume his duties as the enforcer and messenger for the Technocratic will.',
  },
  {
    id: 76,
    name: 'Queen of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/14 Queen of Pattern.png',
    uprightMeaning:
      'Creativity, nurturing, providing, resourceful, trusted, talent, fertility, health, stability, fulfillment',
    reversedMeaning: 'Neglect, dependence, lack, misuse',
    keywords: ['creativity', 'nurturing', 'resourceful', 'fertility'],
    flavorText:
      'Creation is the task at hand. Crowned with the mask of enlightened sight, intimately connected to the throne through which her power flows, the Progenitor Queen of Pattern manipulates the structure of life itself. Her fertile imagination conceives of possibilities as yet unperceived; her disciplined will brings those visions into being.',
  },
  {
    id: 77,
    name: 'King of Pattern',
    arcana: 'minor',
    suit: patternSuit,
    imagePath: '/assets/mage/pattern/13 King pattern.png',
    uprightMeaning:
      'Industry, leadership, stability, discipline, abundance, solidity, prosperity, harvest, abundance, practicality, finances, diagnostician',
    reversedMeaning:
      'Perversity, speculation, waste, corrupt, stubborn, control freak',
    keywords: ['industry', 'practicality', 'leadership', 'stability'],
    flavorText: '',
  },
];

export const allCards: TarotCard[] = [
  ...majorArcana,
  ...questingCards,
  ...primordialismCards,
  ...dynamismCards,
  ...patternCards,
];
