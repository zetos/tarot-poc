import CircularSpreadLayout from '@/components/CircularSpreadLayout';
import type { DrawnCard, SpreadPosition } from '@/types/tarot';

type CircularSpread12LayoutProps = {
  cards: DrawnCard[];
  spreadPositions: SpreadPosition[];
  onCardClick: (card: DrawnCard, position: SpreadPosition) => void;
};

export default function CircularSpread12Layout({
  cards,
  spreadPositions,
  onCardClick,
}: CircularSpread12LayoutProps) {
  return (
    <CircularSpreadLayout
      cards={cards}
      spreadPositions={spreadPositions}
      onCardClick={onCardClick}
      title="Yearly Circle"
      radius={40}
      containerClassName="max-w-4xl"
      cardWidth="clamp(70px, 10vw, 120px)"
      stagger={0.12}
    />
  );
}
