import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { DrawnCard } from "@/types/tarot";

type TarotCardProps = {
  card: DrawnCard;
  positionName: string;
  onClick?: () => void;
  className?: string;
};

export default function TarotCard({
  card,
  positionName,
  onClick,
  className = "",
}: TarotCardProps) {
  const isReversed = card.orientation === "reversed";
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -8,
              scale: 1.03,
              transition: { duration: 0.2, ease: "easeOut" },
            }
      }
      whileTap={
        shouldReduceMotion
          ? {}
          : {
              scale: 0.98,
              transition: { duration: 0.1 },
            }
      }
    >
      <div
        className={`bg-mage-purple-800/80 rounded-lg border-2 border-mage-gold-700/40 overflow-hidden aspect-[3/5] relative ${
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <p className="font-bold text-sm sm:text-base mb-2 text-center text-mage-gold-600">
              {card.name}
            </p>
            <p className="text-xs text-mage-gold-500 text-center">
              {card.keywords.slice(0, 2).join(", ")}
            </p>
          </div>
        )}
      </div>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-mage-gold-700 text-mage-purple-950 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-lg">
        {positionName}
      </div>
    </motion.div>
  );
}
