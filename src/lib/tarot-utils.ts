import type { TarotCard, DrawnCard, CardOrientation } from "@/types/tarot";

export function shuffleDeck(cards: TarotCard[]): TarotCard[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomOrientation(): CardOrientation {
  return Math.random() < 0.5 ? "upright" : "reversed";
}

export function drawCards(deck: TarotCard[], count: number): DrawnCard[] {
  const shuffled = shuffleDeck(deck);
  const drawn: DrawnCard[] = [];

  for (let i = 0; i < count; i++) {
    const card = shuffled[i];
    drawn.push({
      ...card,
      orientation: getRandomOrientation(),
      position: i + 1,
    });
  }

  return drawn;
}
