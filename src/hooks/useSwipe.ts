import { useRef } from "react";

export type SwipeProps = {
  onSwipeCb?: (direction: Tinder.Direction) => void;
  onCardLeftScreenCb?: (direction: Tinder.Direction) => void;
};

export function useSwipe({ onSwipeCb, onCardLeftScreenCb }: SwipeProps) {
  const cardRef = useRef<Tinder.API>(null);

  const onSwipe: Tinder.SwipeHandler = (direction) => {
    console.log(`%conSwipe(${direction})`, "color:cyan");
    onSwipeCb && onSwipeCb(direction);
  };

  const onCardLeftScreen: Tinder.CardLeftScreenHandler = (direction) => {
    console.log(`%conCardLeftScreen(${direction})`, "color:crimson");
    onCardLeftScreenCb && onCardLeftScreenCb(direction);
  };

  const swipe = async (direction: Tinder.Direction) => {
    if (cardRef.current) {
      cardRef.current.swipe(direction);
    }
  };

  return [cardRef, { onSwipe, onCardLeftScreen, swipe }] as const;
}
