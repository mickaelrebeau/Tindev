import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonThumbnail,
} from "@ionic/react";
import "./Messages.css";
import { useRef } from "react";
import { Header } from "../../../components/layout/Header";
import { IconCertif, IconSend, IconShield } from "../../../assets";

export default function MessagesPage() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <>
      <Header>
        <IonButton id="open-modal" size="large" fill="clear">
          <IonIcon slot="start" icon={IconShield} />
        </IonButton>
      </Header>

      <IonContent className="ion-padding">
        <div>
          <h2>Nouveaux Matchs</h2>
          <div className="msg-matchs">
            <div className="msg-card-match" />
            <div className="msg-card-match" />
            <div className="msg-card-match" />
            <div className="msg-card-match" />
          </div>
        </div>

        <div className="msg-messages">
          <h2>Messages</h2>

          <IonList class="msg-list">
            <IonItem className="msg-item">
              <IonThumbnail slot="start">
                <img
                  className="msg-img"
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonThumbnail>
              <div>
                <IonLabel>
                  <div className="msg-certif">
                    L'équipe Tindev
                    <IonIcon slot="end" icon={IconCertif}></IonIcon>
                  </div>
                </IonLabel>
                <IonLabel className="msg-sending">
                  Cela faisait un moment que vous...
                </IonLabel>
              </div>
            </IonItem>

            <IonItem className="msg-item">
              <IonThumbnail slot="start">
                <img
                  className="msg-img"
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonThumbnail>
              <div>
                <IonLabel className="msg-certif">Random</IonLabel>
                <IonLabel>
                  <div className="msg-sending">
                    <IonIcon slot="start" icon={IconSend}></IonIcon>
                    Hello comment tu vas ?
                  </div>
                </IonLabel>
              </div>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25]}
      >
        <IonContent className="ion-padding">
          <h2>Sécurité</h2>
          <IonButton
            fill="clear"
            size="large"
            routerLink="/tabs/profil/security"
          >
            <IonIcon slot="start" size="large" icon={IconShield}></IonIcon>
            <div className="msg-modal">
              <h2>Paramètres de sécurité</h2>
            </div>
          </IonButton>
        </IonContent>
      </IonModal>
    </>
  );
}
