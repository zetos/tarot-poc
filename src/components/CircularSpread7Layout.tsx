import CircularSpreadLayout from '@/components/CircularSpreadLayout';
import type { DrawnCard, SpreadPosition } from '@/types/tarot';

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
  return (
    <CircularSpreadLayout
      cards={cards}
      spreadPositions={spreadPositions}
      onCardClick={onCardClick}
      title="Weekly Circle"
      radius={38}
      containerClassName="max-w-3xl"
      cardWidth="clamp(80px, 12vw, 140px)"
      stagger={0.15}
    />
  );
}
