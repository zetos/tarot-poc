export type TarotCard = {
  id: number;
  name: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  imagePath: string;
  uprightMeaning: string;
  reversedMeaning: string;
  keywords: string[];
};

export type ReadingQuestion = {
  id: string;
  label: string;
  description: string;
};

export type SpreadPosition = {
  position: number;
  name: string;
  description: string;
};

export type Spread = {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
};

export type CardOrientation = "upright" | "reversed";

export type DrawnCard = TarotCard & {
  orientation: CardOrientation;
  position: number;
};

export type Reading = {
  question: ReadingQuestion;
  spread: Spread;
  cards: TarotCard[];
  createdAt: Date;
};

export type ReadingRequest = {
  questionId: string;
  spreadId: string;
};

export type ReadingResponse = {
  questionId: string;
  spreadId: string;
  cards: DrawnCard[];
};
