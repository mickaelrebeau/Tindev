import {
  GestureDetail,
  IonActionSheet,
  IonButton,
  IonContent,
  IonIcon,
  Animation,
  createAnimation,
  createGesture,
  Gesture,
} from "@ionic/react";
import styles from "./Home.module.css";
import { Header } from "@/components/layout/Header";
import {
  IconAlert,
  IconHeart,
  IconNotif,
  IconSkip,
} from "@/assets";

import { useEffect, useRef } from "react";
import { Card } from "@/components/card/Card";

export default function HomePage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const started = useRef<boolean>(false);

  useEffect(() => {
    if (animation.current === null) {
      animation.current = createAnimation()
        .addElement(cardRef.current!)
        .duration(1000)
        .fromTo("transform", "translateX(-500px)", "translateX(500px)");

      gesture.current = createGesture({
        el: cardRef.current!,
        gestureName: "exemple",
        onStart: () => onStart(),
        onMove: (e) => onMove(e),
        onEnd: () => onEnd(),
      });

      gesture.current.enable(true);
    }
  }, [cardRef]);

  const onStart = () => {
    cardRef.current?.classList.add(styles.animate);
  }

  const onMove = (e: GestureDetail) => {
    const { type, currentX, deltaX, velocityX } = e;
    console.log({ type, currentX, deltaX, velocityX });
    animation.current!.progressStart();
    started.current = true;
  }

  const onEnd = () => {
    cardRef.current?.classList.remove(styles.animate);
  }

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

          <Card ref={cardRef}/>

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
