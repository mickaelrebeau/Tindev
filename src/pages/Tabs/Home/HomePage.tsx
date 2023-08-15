import { IonActionSheet, IonButton, IonContent, IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import flamme from '../../../assets/flame-outline.svg'
import notif from '../../../assets/notifications-outline.svg'
import heart from '../../../assets/heart.svg'
import skip from '../../../assets/close.svg'
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

            <IonButton fill="clear" size="large" routerLink="/tabs/home/notifications">
              <IonIcon icon={notif}></IonIcon>
            </IonButton>
          </div>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div className="home-card">
          <h2>Admin 99</h2>
          <div className="home-actions">
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={skip}></IonIcon>
            </IonButton>
            <IonButton id="open-action-sheet" fill="outline" size="small" className="home-small-btn">
              <IonIcon icon={alert}></IonIcon>
            </IonButton>
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={heart}></IonIcon>
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Signaler',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Bloquer',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Annuler',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </>
  );
}