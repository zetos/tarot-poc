export const VALIDATION_CONSTANTS = {
  CUSTOM_QUESTION: {
    MAX_LENGTH: 200,
    MIN_LENGTH: 1,
    FIELD_NAME: 'customQuestion',
    ERROR_CODES: {
      TOO_LONG: 'TOO_LONG',
      TOO_SHORT: 'TOO_SHORT',
      REQUIRED: 'REQUIRED',
    } as const,
    ERROR_MESSAGES: {
      TOO_LONG: (limit: number) =>
        `Question must be ${limit} characters or less`,
      TOO_SHORT: 'Question must not be empty',
      REQUIRED: 'A question is required',
    },
  },
} as const;

export type ValidationConstants = typeof VALIDATION_CONSTANTS;

export type ValidationErrorCode =
  | ValidationConstants['CUSTOM_QUESTION']['ERROR_CODES'][keyof ValidationConstants['CUSTOM_QUESTION']['ERROR_CODES']];

export type ValidationFieldName = ValidationConstants['CUSTOM_QUESTION']['FIELD_NAME'];

export const CUSTOM_QUESTION_MAX_LENGTH =
  VALIDATION_CONSTANTS.CUSTOM_QUESTION.MAX_LENGTH;
