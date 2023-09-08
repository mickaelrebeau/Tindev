import { IonActionSheet, IonButton, IonContent, IonIcon } from "@ionic/react";
import styles from "./Home.module.css";
import { Header } from "@/components/layout/Header";
import { IconAlert, IconHeart, IconNotif, IconSkip } from "@/assets";
import Card from "@/components/card/Card";
import { useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { useSwipeArray } from "@/hooks/useSwipeArray";

type Profile = { id: number; name: string };
const data: Profile[] = [
  { id: 0, name: "Mike" },
  { id: 1, name: "Rayn" },
  { id: 2, name: "Snox" },
  { id: 3, name: "Forth" },
];

// https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js
export default function HomePage() {
  const [profiles, setProfiles] = useState<Profile[]>(data);
  const [isLike, setIsLike] = useState<boolean>();
  const actionsRef = useRef<HTMLIonButtonElement>(null);

  const [setRef, { onSwipe, onCardLeftScreen, swipe }] = useSwipeArray({
    size: profiles.length,
    onCardLeftScreenCb: (direction) => {
      if (direction === "down") {
        actionsRef.current?.click();
        return;
      }
      // call api
      setIsLike(direction === "right");
    },
  });

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
          <div className={styles.swipesWrapper}>
            {profiles.map((profile, i) => (
              <TinderCard
                key={profile.id}
                flickOnSwipe={false}
                // swipeThreshold={0.25}
                ref={setRef(i)}
                onSwipe={onSwipe}
                onCardLeftScreen={onCardLeftScreen}
                preventSwipe={["up"]}
                className={styles.swipe}
              >
                <Card name={profile.name} />
              </TinderCard>
            ))}
          </div>
          <div className={styles.actions}>
            <IonButton
              onClick={() => swipe("left")}
              fill="outline"
              size="large"
            >
              <IonIcon icon={IconSkip} />
            </IonButton>
            <IonButton
              ref={actionsRef}
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
      />
    </>
  );
}
