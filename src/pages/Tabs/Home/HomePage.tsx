import { IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import flamme from '../../../assets/flame-outline.svg'
import notif from '../../../assets/notifications-outline.svg'
import settings from '../../../assets/settings-outline.svg'
import heart from '../../../assets/heart.svg'
import back from '../../../assets/refresh-outline.svg'
import skip from '../../../assets/close.svg'
import star from '../../../assets/star-outline.svg'
import certif from '../../../assets/medical.svg'
import alert from '../../../assets/alert-outline.svg'
import './Home.css'

export default function HomePage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <div className="home-header">
            <div className="home-logo">
              <IonIcon slot="start" size="large" icon={flamme}></IonIcon>
              <h2>tindev</h2>
            </div>

            <div className="home-header-btn">
              <IonIcon slot="start" size="large" icon={notif}></IonIcon>
              <IonIcon slot="start" size="large" icon={settings}></IonIcon>
            </div>
          </div>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div className="home-card">
          <h2 className="home-title">
            Admin 99
            <IonIcon slot="end" icon={certif}></IonIcon>
          </h2>
          <div className="home-actions">
            <IonButton fill="outline" size="small" className="home-small-btn">
              <IonIcon icon={back}></IonIcon>
            </IonButton>
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={skip}></IonIcon>
            </IonButton>
            <IonButton fill="outline" size="small" className="home-small-btn">
              <IonIcon icon={star}></IonIcon>
            </IonButton>
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={heart}></IonIcon>
            </IonButton>
            <IonButton fill="outline" size="small" className="home-small-btn">
              <IonIcon icon={alert}></IonIcon>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </>
  );
}