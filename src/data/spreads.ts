import type { Spread } from "@/types/tarot";

export const celticCross: Spread = {
  id: "celtic-cross",
  name: "The Celtic Cross",
  description: "A comprehensive 10-card spread offering deep insights into your question, covering past, present, and future influences",
  positions: [
    {
      position: 1,
      name: "Present Situation",
      description: "The current state of affairs and the central theme of the reading",
    },
    {
      position: 2,
      name: "Challenge",
      description: "The immediate obstacle or challenge crossing your path",
    },
    {
      position: 3,
      name: "Distant Past",
      description: "Past events and influences that have shaped the current situation",
    },
    {
      position: 4,
      name: "Recent Past",
      description: "Recent events that are passing or fading away",
    },
    {
      position: 5,
      name: "Possible Future",
      description: "Potential outcomes and what may come to be",
    },
    {
      position: 6,
      name: "Near Future",
      description: "Events and influences that will manifest in the near term",
    },
    {
      position: 7,
      name: "Your Attitude",
      description: "Your current mindset, feelings, and approach to the situation",
    },
    {
      position: 8,
      name: "External Influences",
      description: "How others see you and external factors affecting the situation",
    },
    {
      position: 9,
      name: "Hopes and Fears",
      description: "Your innermost hopes and fears regarding the situation",
    },
    {
      position: 10,
      name: "Final Outcome",
      description: "The culmination and final result of the reading",
    },
  ],
};

export const spreads: Spread[] = [celticCross];
