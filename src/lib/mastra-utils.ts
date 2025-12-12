import type { DrawnCard, ReadingQuestion, Spread } from '@/types/tarot';

/**
 * Formats a tarot reading into a comprehensive prompt for the AI agent
 * @param cards - Array of drawn cards with orientations
 * @param question - The question being asked
 * @param spread - The spread being used
 * @returns Formatted prompt string for the Mastra agent
 */
export function formatReadingForAgent(
  cards: DrawnCard[],
  question: ReadingQuestion,
  spread: Spread
): string {
  const header = `Question: ${question.label}
${question.description}

Spread: ${spread.name}
${spread.description}

Cards Drawn:
`;

  const cardDescriptions = cards
    .map((card, index) => {
      const position = spread.positions[index];
      const meaning =
        card.orientation === 'upright'
          ? card.uprightMeaning
          : card.reversedMeaning;

      return `Position ${position.position} - ${position.name}: ${card.name} (${card.orientation})
  Position Meaning: ${position.description}
  Card Keywords: ${card.keywords.join(', ')}
  Card Interpretation: ${meaning}
  Flavor Text: ${card.flavorText}`;
    })
    .join('\n\n');

  const footer = `\n\nProvide a comprehensive tarot reading interpretation addressing the querent's question. Speak as Granny Weatherwax would - with authority, wisdom, and a touch of sharp wit. Connect the cards to their positions and weave them into a cohesive narrative that provides practical, insightful guidance.`;

  return `${header}${cardDescriptions}${footer}`;
}
