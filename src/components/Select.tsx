'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

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
          prev <= 0 ? options.length - 1 : prev - 1
        );
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (highlightedIndex >= 0) {
          onChange(options[highlightedIndex].value);
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
    onChange(optionValue);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  return (
    <div className="w-full relative">
      <label
        id={`${label}-label`}
        className="block text-sm font-medium mb-2 text-mage-gold-600"
      >
        {label}
      </label>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-3 rounded-lg border border-mage-gold-800/30 bg-mage-purple-900/60 text-mage-gold-500 transition-colors hover:border-mage-gold-700/50 focus:outline-none focus:ring-2 focus:ring-mage-gold-700/40 flex items-center justify-between"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={`${label}-label`}
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
  );
}
