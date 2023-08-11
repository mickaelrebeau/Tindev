import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import flamme from '../../../assets/flame-outline.svg'
import shield from '../../../assets/shield-half-outline.svg'
import certif from '../../../assets/medical.svg'
import send from '../../../assets/arrow-undo-outline.svg'
import './Messages.css'

export default function MessagesPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <div className="msg-header">
            <div className="msg-logo">
              <IonIcon slot="start" size="large" icon={flamme}></IonIcon>
              <h2>tindev</h2>
            </div>

            <IonIcon slot="start" size="large" icon={shield}></IonIcon>
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
    </>
  );
}