import {
  Animation,
  Gesture,
  GestureDetail,
  createAnimation,
  createGesture,
} from "@ionic/react";
import { useEffect, useRef } from "react";

type Props<T> = {
  cbOnStart?: (detail: GestureDetail, ref: React.RefObject<T>) => void;
  cbOnMove?: (detail: GestureDetail, ref: React.RefObject<T>) => void;
  cbOnEnd?: (detail: GestureDetail, ref: React.RefObject<T>) => void;
  animationDuration?: number;
};

// https://ionicframework.com/docs/utilities/animations#gesture-animations

export function useSwipe<T extends Element>({
  cbOnStart = () => {},
  cbOnMove = () => {},
  cbOnEnd = () => {},
  animationDuration = 700,
}: Props<T>) {
  const ref = useRef<T>(null);
  const animationToRight = useRef<Animation | null>(null);
  const animationToLeft = useRef<Animation | null>(null);
  const gesture = useRef<Gesture | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (!animationToRight.current) {
      gesture.current = createGesture({
        el: ref.current,
        threshold: 0,
        onStart: (detail) => onStart(detail),
        onMove: (detail) => onMove(detail),
        onEnd: (detail) => onEnd(detail),
        gestureName: "example",
      });
      gesture.current.enable(true);

      animationToRight.current = createAnimation()
        .addElement(ref.current)
        .duration(animationDuration)
        .fromTo(
          "transform",
          "translateX(0px) rotate(0)",
          "translateX(100%) rotate(45deg)"
        );

      animationToLeft.current = createAnimation()
        .addElement(ref.current)
        .duration(animationDuration)
        .fromTo(
          "transform",
          "translateX(0px) rotate(0)",
          "translateX(-100%) rotate(-45deg)"
        );
    }
  }, [ref]);

  const onStart = (detail: GestureDetail) => {
    if (!ref.current) return;
    if (!animationToRight.current) return;
    if (!animationToLeft.current) return;

    cbOnStart(detail, ref);

    animationToLeft.current.stop();
    animationToRight.current.stop();
  };

  const onMove = (detail: GestureDetail) => {
    cbOnMove(detail, ref);
  };

  const onEnd = (detail: GestureDetail) => {
    const { deltaX } = detail;
    if (!gesture.current) return;
    if (!animationToRight.current) return;
    if (!animationToLeft.current) return;
    if (!ref.current) return;

    cbOnEnd(detail, ref);

    if (deltaX >= 200) {
      animationToRight.current.progressEnd(1, 1);
      return;
    }

    if (deltaX <= -200) {
      animationToLeft.current.progressEnd(1, 1);
      return;
    }
  };

  return [ref];
}
