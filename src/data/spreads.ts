import type { Spread } from "@/types/tarot";

export const celticCross: Spread = {
  id: "celtic-cross",
  name: "The Celtic Cross",
  description:
    "A comprehensive 10-card spread offering deep insights into your question, covering past, present, and future influences",
  positions: [
    {
      position: 1,
      name: "Present Situation",
      description:
        "The current state of affairs and the central theme of the reading",
    },
    {
      position: 2,
      name: "Challenge",
      description: "The immediate obstacle or challenge crossing your path",
    },
    {
      position: 3,
      name: "Below",
      description:
        "Unconscious influences, hidden roots, and unknown factors that shape your current circumstances from beneath the surface",
    },
    {
      position: 4,
      name: "Recent Past",
      description: "Recent events that are passing or fading away",
    },
    {
      position: 5,
      name: "Above",
      description:
        "Conscious thoughts, goals, and aspirations that occupy your mind",
    },
    {
      position: 6,
      name: "Near Future",
      description: "Events and influences that will manifest in the near term",
    },
    {
      position: 7,
      name: "The Self",
      description:
        "Your inner landscape in this moment, and the personal approach you're bringing to navigate the situation",
    },
    {
      position: 8,
      name: "External Influences",
      description:
        "How others see you and external factors affecting the situation",
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

export const circular7Weekly: Spread = {
  id: "circular-7-weekly",
  name: "The Circular Spread (Weekly)",
  description:
    "A 7-card circular spread representing the days of the week, suggesting a course of action or state of mind for each day",
  positions: [
    {
      position: 1,
      name: "Sunday",
      description:
        "The beginning of the week - foundational energy and starting point",
    },
    {
      position: 2,
      name: "Monday",
      description: "The first working day - momentum and initial challenges",
    },
    {
      position: 3,
      name: "Tuesday",
      description: "Building energy - action and progress in the week",
    },
    {
      position: 4,
      name: "Wednesday",
      description: "The midpoint - balance and turning point of the week",
    },
    {
      position: 5,
      name: "Thursday",
      description: "Approaching completion - sustained effort and perseverance",
    },
    {
      position: 6,
      name: "Friday",
      description: "Transition and resolution - wrapping up the week's work",
    },
    {
      position: 7,
      name: "Saturday",
      description:
        "Rest and reflection - culmination and preparation for the next cycle",
    },
  ],
};

export const circular12Yearly: Spread = {
  id: "circular-12-yearly",
  name: "The Circular Spread (Yearly)",
  description:
    "A 12-card circular spread representing the months of the year, suggesting guidance and themes for each month ahead",
  positions: [
    {
      position: 1,
      name: "January",
      description:
        "New beginnings and fresh starts - setting the tone for the year",
    },
    {
      position: 2,
      name: "February",
      description:
        "Building foundations - early year challenges and opportunities",
    },
    {
      position: 3,
      name: "March",
      description: "Growth and expansion - spring energy and new possibilities",
    },
    {
      position: 4,
      name: "April",
      description: "Blossoming potential - what comes to fruition",
    },
    {
      position: 5,
      name: "May",
      description: "Abundance and celebration - peak of spring energy",
    },
    {
      position: 6,
      name: "June",
      description: "Transition and change - moving into summer themes",
    },
    {
      position: 7,
      name: "July",
      description: "Peak energy and vitality - height of the year's power",
    },
    {
      position: 8,
      name: "August",
      description: "Sustained effort - maintaining momentum through challenges",
    },
    {
      position: 9,
      name: "September",
      description: "Harvest and reaping - results of earlier efforts manifest",
    },
    {
      position: 10,
      name: "October",
      description:
        "Transformation and release - letting go of what no longer serves",
    },
    {
      position: 11,
      name: "November",
      description: "Inner work and reflection - going deeper within",
    },
    {
      position: 12,
      name: "December",
      description:
        "Completion and celebration - closing the cycle and preparing for renewal",
    },
  ],
};

export const spreads: Spread[] = [
  celticCross,
  circular7Weekly,
  circular12Yearly,
];
