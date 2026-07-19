'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import Select from '@/components/Select';
import { CUSTOM_QUESTION_MAX_LENGTH } from '@/lib/validation-constants';

type SelectOption = {
  value: string;
  label: string;
};

type QuestionInputProps = {
  label: string;
  options: SelectOption[];
  value: string;
  onChangeQuestionId: (value: string) => void;
  customQuestion: string;
  onChangeCustomQuestion: (value: string) => void;
  placeholder?: string;
  customPlaceholder?: string;
};

const getCharCountColor = (length: number, maxLength: number): string => {
  const ratio = length / maxLength;
  if (ratio >= 1) return 'text-red-500';
  if (ratio >= 0.9) return 'text-orange-500';
  if (ratio >= 0.75) return 'text-yellow-500';
  return 'text-mage-gold-600/60';
};

export default function QuestionInput({
  label,
  options,
  value,
  onChangeQuestionId,
  customQuestion,
  onChangeCustomQuestion,
  placeholder = 'Select a question',
  customPlaceholder = 'Type your own question...',
}: QuestionInputProps) {
  const [isCustomMode, setIsCustomMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showWarning =
    customQuestion.length >= CUSTOM_QUESTION_MAX_LENGTH * 0.9;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [customQuestion]);

  const handleSwitchToCustom = () => {
    onChangeQuestionId('');
    setIsCustomMode(true);
    setTimeout(() => textareaRef.current?.focus());
  };

  const handleSwitchToPreset = () => {
    onChangeCustomQuestion('');
    setIsCustomMode(false);
  };

  return (
    <div className="w-full relative">
      {!isCustomMode ? (
        <Select
          label={label}
          options={options}
          value={value}
          onChange={onChangeQuestionId}
          placeholder={placeholder}
        />
      ) : (
        <div>
          <label className="block text-sm font-medium mb-2 text-mage-gold-600">
            {label}
          </label>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <textarea
              ref={textareaRef}
              value={customQuestion}
              onChange={(event) => onChangeCustomQuestion(event.target.value)}
              placeholder={customPlaceholder}
              rows={1}
              maxLength={CUSTOM_QUESTION_MAX_LENGTH}
              aria-describedby="char-count"
              className={`w-full pl-4 pr-12 py-3 rounded-lg border bg-mage-purple-900/80 text-mage-gold-400 placeholder-mage-gold-600/50 transition-all focus:outline-none focus:ring-2 resize-none overflow-hidden ${
                showWarning
                  ? 'border-orange-500/70 focus:ring-orange-500/40'
                  : 'border-mage-gold-600 focus:ring-mage-gold-500/40'
              }`}
              style={{ minHeight: '52px' }}
            />
            <button
              type="button"
              onClick={handleSwitchToPreset}
              className="absolute right-3 top-3 text-xs text-mage-gold-600 hover:text-mage-gold-500 transition-colors"
              aria-label="Clear question"
            >
              Clear
            </button>
            <div
              id="char-count"
              role="status"
              className="absolute bottom-2 right-3 text-xs transition-colors"
              aria-live={showWarning ? 'polite' : 'off'}
              aria-atomic="true"
            >
              <span className="sr-only">Characters used: </span>
              <span
                className={getCharCountColor(
                  customQuestion.length,
                  CUSTOM_QUESTION_MAX_LENGTH,
                )}
              >
                {customQuestion.length}/{CUSTOM_QUESTION_MAX_LENGTH}
              </span>
            </div>
          </motion.div>
        </div>
      )}

      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-px bg-mage-gold-800/20" />
        {!isCustomMode ? (
          <button
            type="button"
            onClick={handleSwitchToCustom}
            className="text-xs text-mage-gold-600 hover:text-mage-gold-500 transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Type your own question
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSwitchToPreset}
            className="text-xs text-mage-gold-600 hover:text-mage-gold-500 transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            Choose a preset question
          </button>
        )}
        <div className="flex-1 h-px bg-mage-gold-800/20" />
      </div>
    </div>
  );
}
