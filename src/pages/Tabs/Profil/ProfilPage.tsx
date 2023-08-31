import {
  IonButton,
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import "./Profil.css";
import { Header } from "../../../components/layout/Header";
import {
  IconGithub,
  IconGoogle,
  IconInsta,
  IconPen,
  IconSettings,
  IconShield,
  IconTwitch,
  IconTwitter,
} from "../../../assets";

export default function ProfilPage() {
  return (
    <>
      <Header>
        <IonButton fill="clear" size="large" routerLink="/tabs/profil/security">
          <IonIcon slot="icon-only" icon={IconShield} />
        </IonButton>
        <IonButton fill="clear" size="large" routerLink="/tabs/profil/settings">
          <IonIcon slot="icon-only" icon={IconSettings} />
        </IonButton>
      </Header>

      <IonContent className="ion-padding">
        <div className="profil-content">
          <div className="profil-edit-btn">
            <IonButton size="small" routerLink="/tabs/profil/edit">
              <IonIcon icon={IconPen} />
            </IonButton>
          </div>
          <div className="profil-header">
            <h2>Pseudo</h2>
            <img
              className="profil-img"
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />
          </div>
        </div>

        <div className="profil-details">
          <IonList lines="inset">
            <IonItem>
              <IonLabel>Nom de famille</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Prénom</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Age</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Poste</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Entreprise</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Formation</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Bio</IonLabel>
            </IonItem>
            <IonItem>
              <div className="profil-skills">
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
            </IonItem>
            <IonItem>
              <div className="profil-socials">
                <IonIcon size="large" icon={IconGithub} />
                <IonIcon size="large" icon={IconGoogle} />
                <IonIcon size="large" icon={IconTwitter} />
                <IonIcon size="large" icon={IconInsta} />
                <IonIcon size="large" icon={IconTwitch} />
              </div>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </>
  );
}
