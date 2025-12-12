type AIInterpretationProps = {
  interpretation: string | null;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
};

export default function AIInterpretation({
  interpretation,
  isLoading,
  error,
  onRetry,
}: AIInterpretationProps) {
  // Don't render anything if there's nothing to show
  if (!isLoading && !error && !interpretation) {
    return null;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="mt-8 p-8 bg-mage-purple-800/60 rounded-2xl border border-mage-gold-800/30 shadow-lg">
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-4 h-4 bg-mage-gold-600 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-mage-gold-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-4 h-4 bg-mage-gold-600 rounded-full animate-bounce delay-200"></div>
          </div>
          <p className="text-center font-visit text-lg text-mage-gold-600">
            Consulting the cards...
          </p>
          <div className="space-y-3">
            <div className="h-4 bg-mage-purple-700/50 rounded w-full"></div>
            <div className="h-4 bg-mage-purple-700/50 rounded w-5/6"></div>
            <div className="h-4 bg-mage-purple-700/50 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-8 p-8 bg-mage-purple-800/60 rounded-2xl border border-red-800/50 shadow-lg">
        <div className="text-center space-y-4">
          <h3 className="font-abbess text-2xl text-red-400">
            Reading Interrupted
          </h3>
          <p className="font-visit text-base text-mage-gold-600">
            {error}
          </p>
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-mage-gold-700 text-mage-purple-950 rounded-lg font-medium hover:bg-mage-gold-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Success state - display interpretation
  if (interpretation) {
    // Split interpretation into paragraphs for better formatting
    const paragraphs = interpretation
      .split('\n')
      .filter((p) => p.trim().length > 0);

    return (
      <div className="mt-8 p-8 bg-mage-purple-800/60 rounded-2xl border border-mage-gold-800/30 shadow-lg">
        <div className="mb-6 text-center border-b border-mage-gold-800/30 pb-4">
          <h3 className="font-abbess text-2xl text-mage-gold-700">
            Granny&apos;s Reading
          </h3>
          <p className="font-visit text-sm text-mage-gold-500 mt-2">
            A practical interpretation of the cards
          </p>
        </div>

        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-visit text-lg text-mage-gold-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
