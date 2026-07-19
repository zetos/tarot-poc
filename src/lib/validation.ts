import { CUSTOM_QUESTION_MAX_LENGTH } from './validation-constants';

export type ValidationResult =
  | { success: true; data: string }
  | { success: false; error: string };

export const validateCustomQuestion = (
  question: string | undefined
): ValidationResult => {
  if (!question) {
    return { success: false, error: 'A question is required' };
  }

  const trimmedQuestion = question.trim();

  if (!trimmedQuestion) {
    return { success: false, error: 'Question must not be empty' };
  }

  if (trimmedQuestion.length > CUSTOM_QUESTION_MAX_LENGTH) {
    return {
      success: false,
      error: `Question must be ${CUSTOM_QUESTION_MAX_LENGTH} characters or less`,
    };
  }

  return { success: true, data: trimmedQuestion };
};
