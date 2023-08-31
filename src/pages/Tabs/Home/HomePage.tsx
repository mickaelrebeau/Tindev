import {
  IonActionSheet,
  IonButton,
  IonChip,
  IonContent,
  IonIcon,
} from "@ionic/react";
import "./Home.css";
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
        <div className="home-content">
          <div className="home-card">
            <div className="home-card-title">
              <h2>Admin</h2>
              <img
                className="home-img"
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
            </div>
            <div className="home-card-text">
              <h3>Administrateur réseaux</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="home-labels">
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
            <div className="home-socials">
              <IonIcon size="large" icon={IconGithub} />
              <IonIcon size="large" icon={IconGoogle} />
              <IonIcon size="large" icon={IconTwitter} />
              <IonIcon size="large" icon={IconInsta} />
              <IonIcon size="large" icon={IconTwitch} />
            </div>
          </div>
          <div className="home-actions">
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={IconSkip} />
            </IonButton>
            <IonButton
              id="open-action-sheet"
              fill="outline"
              size="small"
              className="home-small-btn"
            >
              <IonIcon icon={IconAlert} />
            </IonButton>
            <IonButton fill="outline" size="large" className="home-lareg-btn">
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
