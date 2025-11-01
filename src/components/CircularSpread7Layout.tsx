import TarotCard from "@/components/TarotCard";
import type { DrawnCard, SpreadPosition } from "@/types/tarot";

type CircularSpread7LayoutProps = {
  cards: DrawnCard[];
  spreadPositions: SpreadPosition[];
  onCardClick: (card: DrawnCard, position: SpreadPosition) => void;
};

export default function CircularSpread7Layout({
  cards,
  spreadPositions,
  onCardClick,
}: CircularSpread7LayoutProps) {
  const getCardByPosition = (position: number) => {
    return cards.find((card) => card.position === position);
  };

  const getPositionInfo = (position: number) => {
    return spreadPositions.find((pos) => pos.position === position);
  };

  // Calculate positions for 7 cards in a circle
  // Starting at top (12 o'clock) for Sunday, going clockwise
  const getCardPosition = (index: number) => {
    const totalCards = 7;
    const angle = ((index - 1) * 360) / totalCards - 90; // -90 to start at top
    const angleRad = (angle * Math.PI) / 180;
    
    // Responsive radius
    const radiusPercent = 38; // percentage of container
    
    const x = 50 + radiusPercent * Math.cos(angleRad);
    const y = 50 + radiusPercent * Math.sin(angleRad);
    
    return { x, y };
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-3xl aspect-square">
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground/80">
              Weekly Circle
            </h3>
            <p className="text-sm text-foreground/50 mt-1">
              Click cards for details
            </p>
          </div>
        </div>

        {/* Cards positioned in circle */}
        {[1, 2, 3, 4, 5, 6, 7].map((pos) => {
          const card = getCardByPosition(pos);
          const posInfo = getPositionInfo(pos);
          if (!card || !posInfo) return null;

          const { x, y } = getCardPosition(pos);

          return (
            <div
              key={pos}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                width: "clamp(80px, 12vw, 140px)",
              }}
            >
              <TarotCard
                card={card}
                positionName={posInfo.name}
                onClick={() => onCardClick(card, posInfo)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
