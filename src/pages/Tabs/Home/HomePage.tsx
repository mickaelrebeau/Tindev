import { IonActionSheet, IonButton, IonContent, IonIcon } from "@ionic/react";
import styles from "./Home.module.css";
import { Header } from "../../../components/layout/Header";
import { IconAlert, IconHeart, IconNotif, IconSkip } from "../../../assets";
import { CardWithRef } from "../../../components/card/Card";
import { useSwipe } from "../../../hooks/useSwipe";

export default function HomePage() {
  const [cardRef] = useSwipe<HTMLDivElement>({
    cbOnStart: ({}, ref) => {
      ref.current?.classList.remove(styles.swapYes, styles.swapNo);
      ref.current?.classList.add(styles.dragging);
    },
    cbOnEnd: ({ deltaX }, ref) => {
      ref.current?.classList.remove(styles.dragging);

      if (deltaX >= 200) {
        ref.current?.classList.add(styles.swapYes);
        return;
      }

      if (deltaX <= -200) {
        ref.current?.classList.add(styles.swapNo);
        return;
      }
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
