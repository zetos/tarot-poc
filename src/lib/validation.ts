import {
  VALIDATION_CONSTANTS,
  CUSTOM_QUESTION_MAX_LENGTH,
  type ValidationErrorCode,
  type ValidationFieldName,
} from './validation-constants';

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: readonly ValidationError[] };

export type ValidationError = {
  field: ValidationFieldName;
  message: string;
  code: ValidationErrorCode;
};

export const validateCustomQuestion = (
  question: string | undefined
): ValidationResult<string> => {
  if (!question) {
    return {
      success: false,
      errors: [
        {
          field: VALIDATION_CONSTANTS.CUSTOM_QUESTION.FIELD_NAME,
          message: VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_MESSAGES.REQUIRED,
          code: VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_CODES.REQUIRED,
        },
      ],
    };
  }

  const trimmedQuestion = question.trim();

  if (trimmedQuestion.length === 0) {
    return {
      success: false,
      errors: [
        {
          field: VALIDATION_CONSTANTS.CUSTOM_QUESTION.FIELD_NAME,
          message:
            VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_MESSAGES.TOO_SHORT,
          code: VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_CODES.TOO_SHORT,
        },
      ],
    };
  }

  if (trimmedQuestion.length > CUSTOM_QUESTION_MAX_LENGTH) {
    return {
      success: false,
      errors: [
        {
          field: VALIDATION_CONSTANTS.CUSTOM_QUESTION.FIELD_NAME,
          message:
            VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_MESSAGES.TOO_LONG(
              CUSTOM_QUESTION_MAX_LENGTH
            ),
          code: VALIDATION_CONSTANTS.CUSTOM_QUESTION.ERROR_CODES.TOO_LONG,
        },
      ],
    };
  }

  return { success: true, data: trimmedQuestion };
};

export const createErrorResponse = (
  message: string,
  status: number = 400
): { error: string; status: number } => ({ error: message, status });
