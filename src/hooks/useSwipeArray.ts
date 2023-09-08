import { useRef } from "react";

export type SwipeProps = {
  size: number;
  onSwipeCb?: (direction: Tinder.Direction) => void;
  onCardLeftScreenCb?: (direction: Tinder.Direction) => void;
};

const DEBUG = false;

export function useSwipeArray({
  size,
  onSwipeCb,
  onCardLeftScreenCb,
}: SwipeProps) {
  const cardRefs = useRef<Tinder.API[]>([]);
  const currentIndex = useRef(size - 1);

  const onSwipe: Tinder.SwipeHandler = (direction) => {
    DEBUG && console.log(`%conSwipe(${direction})`, "color:cyan");

    currentIndex.current--;
    onSwipeCb && onSwipeCb(direction);
  };

  const onCardLeftScreen: Tinder.CardLeftScreenHandler = (direction) => {
    DEBUG && console.log(`%conCardLeftScreen(${direction})`, "color:crimson");

    onCardLeftScreenCb && onCardLeftScreenCb(direction);
  };

  const swipe: Tinder.SwipeHandler = (direction) => {
    DEBUG && console.log(`%cswipe(${direction})`, "color:yellow");
    if (!cardRefs.current) return;
    if (currentIndex.current < 0) return;

    cardRefs.current[currentIndex.current].swipe(direction);
  };

  const setRef = (i: number) => {
    return (el: Tinder.API | null) => el && (cardRefs.current[i] = el);
  };

  return [setRef, { onSwipe, onCardLeftScreen, swipe }] as const;
}
