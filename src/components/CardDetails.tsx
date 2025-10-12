import Image from "next/image";
import { useState } from "react";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";

type CardDetailsProps = {
  card: DrawnCard | null;
  positionInfo: SpreadPosition | null;
  onClose: () => void;
};

export default function CardDetails({
  card,
  positionInfo,
  onClose,
}: CardDetailsProps) {
  const [imageError, setImageError] = useState(false);

  if (!card || !positionInfo) return null;

  const isReversed = card.orientation === "reversed";
  const meaning = isReversed ? card.reversedMeaning : card.uprightMeaning;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-black/[.1] dark:border-white/[.2] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {card.name}
              </h2>
              <p className="text-sm text-foreground/60">
                {isReversed ? "Reversed" : "Upright"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-foreground/60 hover:text-foreground transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div
                className={`relative w-64 h-96 bg-foreground/[0.05] dark:bg-white/[0.08] rounded-lg border-2 border-black/[.1] dark:border-white/[.2] overflow-hidden ${
                  isReversed ? "rotate-180" : ""
                }`}
              >
                {!imageError ? (
                  <Image
                    src={card.imagePath}
                    alt={card.name}
                    fill
                    className="object-contain"
                    onError={() => setImageError(true)}
                    sizes="256px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <p className="font-bold text-base mb-2 text-center">
                      {card.name}
                    </p>
                    <p className="text-sm text-foreground/60 text-center">
                      Image not available
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-foreground/[0.03] dark:bg-white/[0.05] rounded-lg p-4 border border-black/[.05] dark:border-white/[.1]">
              <h3 className="font-semibold mb-2 text-sm text-foreground/80">
                Position {positionInfo.position}: {positionInfo.name}
              </h3>
              <p className="text-sm text-foreground/70">
                {positionInfo.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Meaning</h3>
              <p className="text-foreground/80 leading-relaxed">{meaning}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {card.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-foreground/[0.08] dark:bg-white/[0.1] rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 py-3 px-6 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
