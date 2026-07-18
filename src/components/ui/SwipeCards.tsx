import { useState, type Dispatch, type PointerEvent, type SetStateAction } from 'react';
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import type { SwipeCardImage } from '@/constants/swipeCards';

interface CardProps extends SwipeCardImage {
  cards: SwipeCardImage[];
  setCards: Dispatch<SetStateAction<SwipeCardImage[]>>;
}

function Card({ id, url, alt, setCards, cards }: CardProps) {
  const x = useMotionValue(0);
  const dragControls = useDragControls();

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prev) => {
        const swiped = prev.find((card) => card.id === id);
        if (!swiped) return prev;
        const rest = prev.filter((card) => card.id !== id);
        return [swiped, ...rest];
      });
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (isFront) {
      dragControls.start(event);
    }
  };

  return (
    <motion.div
      draggable={false}
      onPointerDown={handlePointerDown}
      role="img"
      aria-label={alt}
      className="h-80 w-64 md:h-96 md:w-72 origin-bottom touch-none select-none rounded-xl border border-[rgba(255,130,0,0.35)] bg-[#061b3a] bg-cover bg-center hover:cursor-grab active:cursor-grabbing"
      style={{
        backgroundImage: `url(${url})`,
        gridRow: 1,
        gridColumn: 1,
        zIndex: isFront ? cards.length : id,
        pointerEvents: isFront ? 'auto' : 'none',
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? '0 20px 25px -5px rgb(1 12 26 / 0.55), 0 8px 10px -6px rgb(1 12 26 / 0.45)'
          : '0 8px 16px rgb(1 12 26 / 0.35)',
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? 'x' : false}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragSnapToOrigin
      onDragEnd={handleDragEnd}
    />
  );
}

interface SwipeCardsProps {
  images: SwipeCardImage[];
  className?: string;
}

export default function SwipeCards({ images, className = '' }: SwipeCardsProps) {
  const [cards, setCards] = useState(() => [...images].reverse());

  if (!cards.length) return null;

  return (
    <div
      className={`grid h-[420px] md:h-[500px] w-full max-w-md mx-auto place-items-center ${className}`}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          url={card.url}
          alt={card.alt}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </div>
  );
}
