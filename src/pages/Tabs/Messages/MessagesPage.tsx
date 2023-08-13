import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import flamme from '../../../assets/flame-outline.svg'
import shield from '../../../assets/shield-half-outline.svg'
import certif from '../../../assets/medical.svg'
import send from '../../../assets/arrow-undo-outline.svg'
import './Messages.css'
import { useRef } from "react";

export default function MessagesPage() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <>
      <IonHeader>

        <IonToolbar>
          <div className="msg-header">
            <div className="msg-logo">
              <IonIcon slot="start" size="large" icon={flamme}></IonIcon>
              <h2>tindev</h2>
            </div>

            <IonButton id="open-modal" fill="clear">
              <IonIcon slot="start" icon={shield}></IonIcon>
            </IonButton>
          </div>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div>
          <h2>Nouveaux Matchs</h2>
          <div className="msg-matchs">
            <div className="msg-card-match"></div>
            <div className="msg-card-match"></div>
            <div className="msg-card-match"></div>
            <div className="msg-card-match"></div>
          </div>
        </div>

        <div className="msg-messages">
          <h2>Messages</h2>

          <IonList class="msg-list">
            <IonItem className="msg-item">
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <div>
                <IonLabel>
                  <div className="msg-certif">
                    L'équipe Tindev
                    <IonIcon slot="end" icon={certif}></IonIcon>
                  </div>
                </IonLabel>
                <IonLabel className="msg-sending">Cela faisait un moment que vous...</IonLabel>
              </div>
            </IonItem>

            <IonItem className="msg-item">
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <div>
                <IonLabel className="msg-certif">
                  Random
                </IonLabel>
                <IonLabel>
                  <div className="msg-sending">
                    <IonIcon slot="start" icon={send}></IonIcon>
                    Hello comment tu vas ?
                  </div>
                </IonLabel>
              </div>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25]}>
        <IonContent className="ion-padding">
          <h2>Sécurité</h2>
          <IonButton fill="clear" size="large" routerLink="/tabs/profil/security">
            <IonIcon slot="start" size="large" icon={shield}></IonIcon>
            <div className="msg-modal">
              <h2>Paramètres de sécurité</h2>
            </div>
          </IonButton>
        </IonContent>
      </IonModal> 
    </>
  );
}