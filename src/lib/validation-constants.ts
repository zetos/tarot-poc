export const VALIDATION_CONSTANTS = {
  CUSTOM_QUESTION: {
    MAX_LENGTH: 200,
    MIN_LENGTH: 1,
    ERROR_MESSAGES: {
      TOO_LONG: (limit: number) =>
        `Question must be ${limit} characters or less`,
      TOO_SHORT: 'Question must not be empty',
      REQUIRED: 'A question is required',
    },
  },
} as const;

export type ValidationConstants = typeof VALIDATION_CONSTANTS;

export const CUSTOM_QUESTION_MAX_LENGTH =
  VALIDATION_CONSTANTS.CUSTOM_QUESTION.MAX_LENGTH;
