import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import flamme from '../../../assets/flame-outline.svg'
import shield from '../../../assets/shield-half-outline.svg'
import settings from '../../../assets/settings-outline.svg'
import pen from '../../../assets/pencil-outline.svg'
import './Profil.css'

export default function ProfilPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <div className="profil-header">
            <div className="profil-logo">
              <IonIcon slot="start" size="large" icon={flamme}></IonIcon>
              <h2>tindev</h2>
            </div>

            <div className="profil-header-btn">
              <IonButton fill="clear" routerLink="/tabs/profil/security">
                <IonIcon slot="icon-only" icon={shield}></IonIcon>
              </IonButton>
              <IonButton fill="clear" routerLink="/tabs/profil/settings">
                <IonIcon slot="icon-only" icon={settings}></IonIcon>
              </IonButton>
            </div>
          </div>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div className="profil-content">
          <div className="profil-edit-btn">
            <IonButton size="small" routerLink="/tabs/profil/edit">
              <IonIcon icon={pen}></IonIcon>
            </IonButton>
          </div>
          <img className="profil-img" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <h2>Admin, 99</h2>
        </div>
      </IonContent>
    </>
  );
}