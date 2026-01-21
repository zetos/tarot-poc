import {
  VALIDATION_CONSTANTS,
  CUSTOM_QUESTION_MAX_LENGTH,
} from './validation-constants';

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: readonly ValidationError[] };

export type ValidationError = {
  field: string;
  message: string;
  code: string;
};

export const validateCustomQuestion = (
  question: string | undefined
): ValidationResult<string | undefined> => {
  if (!question || question === '') {
    return { success: true, data: undefined };
  }

  const trimmedQuestion = question.trim();

  if (trimmedQuestion.length === 0) {
    return {
      success: false,
      errors: [
        {
          field: 'customQuestion',
          message: VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_MESSAGES.TOO_SHORT,
          code: 'TOO_SHORT',
        },
      ],
    };
  }

  if (trimmedQuestion.length > CUSTOM_QUESTION_MAX_LENGTH) {
    return {
      success: false,
      errors: [
        {
          field: 'customQuestion',
          message:
            VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_MESSAGES.TOO_LONG(
              CUSTOM_QUESTION_MAX_LENGTH
            ),
          code: 'TOO_LONG',
        },
      ],
    };
  }

  return { success: true, data: trimmedQuestion };
};
