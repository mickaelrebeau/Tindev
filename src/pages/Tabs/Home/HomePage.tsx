import {
  GestureDetail,
  IonActionSheet,
  IonButton,
  IonContent,
  IonIcon,
  createGesture,
  Animation,
  createAnimation,
  Gesture,
} from "@ionic/react";
import styles from "./Home.module.css";
import { Header } from "../../../components/layout/Header";
import { IconAlert, IconHeart, IconNotif, IconSkip } from "../../../assets";
import { CardWithRef } from "../../../components/card/Card";
import { useEffect, useRef } from "react";

export default function HomePage() {
  // https://ionicframework.com/docs/utilities/animations#gesture-animations
  const cardRef = useRef<HTMLDivElement>(null);
  const animationToRight = useRef<Animation | null>(null);
  const animationToLeft = useRef<Animation | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const initialStep = useRef(0);

  const MAX_TRANSLATE = 344 - 100 - 32;

  useEffect(() => {
    if (!cardRef.current) return;

    if (!animationToRight.current) {
      gesture.current = createGesture({
        el: cardRef.current,
        threshold: 0,
        onStart: () => onStart(),
        onMove: (detail) => onMove(detail),
        onEnd: (detail) => onEnd(detail),
        gestureName: "example",
      });
      gesture.current.enable(true);

      animationToRight.current = createAnimation()
        .addElement(cardRef.current)
        .duration(1000)
        .fromTo(
          "transform",
          "translateX(0px) rotate(0)",
          "translateX(100%) rotate(45deg"
        );

      animationToLeft.current = createAnimation()
        .addElement(cardRef.current)
        .duration(1000)
        .fromTo(
          "transform",
          "translateX(0px) rotate(0)",
          "translateX(-100%) rotate(-45deg"
        );
    }
  }, [cardRef]);

  const clamp = (min: number, n: number, max: number) => {
    return Math.max(min, Math.min(n, max));
  };

  const getStep = (ev: GestureDetail) => {
    const delta = initialStep.current + ev.deltaX;
    return clamp(0, delta / MAX_TRANSLATE, 1);
  };

  const onStart = () => {
    if (!cardRef.current) return;
    if (!animationToRight.current) return;
    if (!animationToLeft.current) return;

    cardRef.current.classList.remove(styles.swapYes, styles.swapNo);
    cardRef.current.classList.add(styles.dragging);

    animationToLeft.current.stop();
    animationToRight.current.stop();
  };

  const onMove = (detail: GestureDetail) => {
    // if (!animation.current) return;
    // if (!started.current) {
    //   animation.current.progressStart();
    //   started.current = true;
    // }
    // animation.current.progressStep(getStep(detail));
    // animation.current!.progressStep(getStep(ev));
  };

  const onEnd = (detail: GestureDetail) => {
    const { deltaX } = detail;
    if (!gesture.current) return;
    if (!animationToRight.current) return;
    if (!animationToLeft.current) return;
    if (!cardRef.current) return;

    // gesture.current.enable(true);

    cardRef.current?.classList.remove(styles.dragging);

    if (deltaX >= 200) {
      cardRef.current.classList.add(styles.swapYes);
      // animationToRight.current.progressStart(true, 1);
      animationToRight.current.progressEnd(1, 1);
      return;
    }

    if (deltaX <= -200) {
      cardRef.current.classList.add(styles.swapNo);
      // animationToLeft.current.progressStart(true, 1);
      animationToLeft.current.progressEnd(1, 1);
      return;
    }
  };

  return (
    <>
      <Header>
        <IonButton
          fill="clear"
          size="large"
          routerLink="/tabs/home/notifications"
        >
          <IonIcon icon={IconNotif} />
        </IonButton>
      </Header>

      <IonContent className="ion-padding">
        <div className={styles.content}>
          <CardWithRef ref={cardRef} />
          <div className={styles.actions}>
            <IonButton fill="outline" size="large">
              <IonIcon icon={IconSkip} />
            </IonButton>
            <IonButton
              id="open-action-sheet"
              fill="outline"
              size="small"
              className={styles.smallBtn}
            >
              <IonIcon icon={IconAlert} />
            </IonButton>
            <IonButton fill="outline" size="large">
              <IonIcon icon={IconHeart} />
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: "Signaler",
            role: "destructive",
            data: {
              action: "delete",
            },
          },
          {
            text: "Bloquer",
            role: "destructive",
            data: {
              action: "delete",
            },
          },
          {
            text: "Annuler",
            role: "cancel",
            data: {
              action: "cancel",
            },
          },
        ]}
      ></IonActionSheet>
    </>
  );
}
