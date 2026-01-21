'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const checkOverLimit = (length: number, maxLength: number): boolean =>
  length > maxLength;

const checkShowWarning = (length: number, maxLength: number): boolean =>
  length >= maxLength * 0.9 && !checkOverLimit(length, maxLength);

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
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const charCountColor = useMemo(
    () => getCharCountColor(customQuestion.length, CUSTOM_QUESTION_MAX_LENGTH),
    [customQuestion.length],
  );

  const overLimit = useMemo(
    () => checkOverLimit(customQuestion.length, CUSTOM_QUESTION_MAX_LENGTH),
    [customQuestion.length],
  );

  const showWarning = useMemo(
    () => checkShowWarning(customQuestion.length, CUSTOM_QUESTION_MAX_LENGTH),
    [customQuestion.length],
  );

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;
  const isCustomMode = customQuestion.trim().length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [customQuestion]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(true);
        setHighlightedIndex(0);
      }
    } else {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % options.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setHighlightedIndex((prev) =>
          prev <= 0 ? options.length - 1 : prev - 1,
        );
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (highlightedIndex >= 0) {
          onChangeQuestionId(options[highlightedIndex].value);
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    }
  };

  const handleOptionClick = (optionValue: string) => {
    onChangeQuestionId(optionValue);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleSwitchToCustom = () => {
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  const handleSwitchToPreset = () => {
    onChangeCustomQuestion('');
  };

  return (
    <div className="w-full relative">
      <label className="block text-sm font-medium mb-2 text-mage-gold-600">
        {label}
      </label>

      {!isCustomMode ? (
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 rounded-lg border border-mage-gold-800/30 bg-mage-purple-900/60 text-mage-gold-500 transition-colors hover:border-mage-gold-700/50 focus:outline-none focus:ring-2 focus:ring-mage-gold-700/40 flex items-center justify-between"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span>{displayValue}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 w-full mt-1 bg-mage-purple-950 border border-mage-gold-700/50 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                role="listbox"
              >
                {options.map((option, index) => (
                  <div
                    key={option.value}
                    onClick={() => handleOptionClick(option.value)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`px-4 py-3 cursor-pointer transition-colors text-mage-gold-500 hover:bg-mage-gold-700 hover:text-mage-purple-950 ${
                      highlightedIndex === index
                        ? 'bg-mage-gold-600 text-mage-purple-950'
                        : ''
                    }`}
                    role="option"
                    aria-selected={value === option.value}
                  >
                    {option.label}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <textarea
            ref={textareaRef}
            value={customQuestion}
            onChange={(e) => onChangeCustomQuestion(e.target.value)}
            placeholder={customPlaceholder}
            rows={1}
            maxLength={CUSTOM_QUESTION_MAX_LENGTH}
            aria-describedby="char-count"
            aria-invalid={overLimit}
            className={`w-full pl-4 pr-12 py-3 rounded-lg border bg-mage-purple-900/80 text-mage-gold-400 placeholder-mage-gold-600/50 transition-all focus:outline-none focus:ring-2 resize-none overflow-hidden ${
              overLimit
                ? 'border-red-500 focus:ring-red-500/40'
                : showWarning
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
            aria-live={overLimit || showWarning ? 'polite' : 'off'}
            aria-atomic="true"
          >
            <span className="sr-only">Characters used: </span>
            <span className={charCountColor}>
              {customQuestion.length}/{CUSTOM_QUESTION_MAX_LENGTH}
            </span>
          </div>
        </motion.div>
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
