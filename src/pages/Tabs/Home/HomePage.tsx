import { IonActionSheet, IonButton, IonContent, IonIcon } from "@ionic/react";
import styles from "./Home.module.css";
import { Header } from "@/components/layout/Header";
import { IconAlert, IconHeart, IconNotif, IconSkip } from "@/assets";
import Card from "@/components/card/Card";
import { useRef, useState } from "react";
import TinderCard from "react-tinder-card";

// https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js
export default function HomePage() {
  const [isLike, setIsLike] = useState<boolean>();

  const cardRef = useRef<Tinder.API>(null);

  const onSwipe: Tinder.SwipeHandler = (direction) => {
    setIsLike(direction === "right");
  };

  const onCardLeftScreen: Tinder.CardLeftScreenHandler = () => {
    console.log("Card left the screen");
  };

  const swipe = async (direction: Tinder.Direction) => {
    if (cardRef.current) {
      cardRef.current.swipe(direction);
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
          <TinderCard
            ref={cardRef}
            onSwipe={onSwipe}
            onCardLeftScreen={onCardLeftScreen}
            preventSwipe={["up", "down"]}
          >
            <Card />
          </TinderCard>

          <div className={styles.actions}>
            <IonButton
              onClick={() => swipe("left")}
              fill="outline"
              size="large"
            >
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
            <IonButton
              onClick={() => swipe("right")}
              fill="outline"
              size="large"
            >
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
