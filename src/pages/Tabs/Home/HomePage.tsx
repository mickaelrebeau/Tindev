import {
  IonActionSheet,
  IonButton,
  IonChip,
  IonContent,
  IonIcon,
} from "@ionic/react";
import styles from "./Home.module.css";
import { Header } from "../../../components/layout/Header";
import {
  IconAlert,
  IconGithub,
  IconGoogle,
  IconHeart,
  IconInsta,
  IconNotif,
  IconSkip,
  IconTwitch,
  IconTwitter,
} from "../../../assets";

export default function HomePage() {
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
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <h2>Admin</h2>
              <img
                className={styles.img}
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
            </div>
            <div className={styles.cardText}>
              <h3>Administrateur réseaux</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={styles.labels}>
              <IonChip outline>Python</IonChip>
              <IonChip outline>C</IonChip>
              <IonChip outline>C#</IonChip>
              <IonChip outline>C++</IonChip>
              <IonChip outline>Java</IonChip>
              <IonChip outline>PHP</IonChip>
              <IonChip outline>Javascript</IonChip>
              <IonChip outline>HTML</IonChip>
              <IonChip outline>CSS</IonChip>
              <IonChip outline>Go</IonChip>
              <IonChip outline>Rust</IonChip>
              <IonChip outline>Ruby</IonChip>
            </div>
            <div className={styles.socials}>
              <IonIcon size="large" icon={IconGithub} />
              <IonIcon size="large" icon={IconGoogle} />
              <IonIcon size="large" icon={IconTwitter} />
              <IonIcon size="large" icon={IconInsta} />
              <IonIcon size="large" icon={IconTwitch} />
            </div>
          </div>
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
