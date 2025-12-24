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
  // Validate card count matches spread positions
  if (cards.length !== spread.positions.length) {
    throw new Error(
      `The cards don't match the chosen spread. Expected ${spread.positions.length} cards but received ${cards.length}.`
    );
  }

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

      return `Position ${position.position} - ${position.name}: ${card.name} (${
        card.orientation
      })
  Position Meaning: ${position.description}
  Card Keywords: ${card.keywords.join(', ')}
  Card Interpretation: ${meaning}
  Flavor Text: ${card.flavorText}`;
    })
    .join('\n\n');

  return `${header}${cardDescriptions}`;
}
