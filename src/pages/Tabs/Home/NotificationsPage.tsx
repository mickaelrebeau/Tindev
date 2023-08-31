import { IonBackButton, IonBadge, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from "@ionic/react";
import './Home.css'

export default function NotificationsPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar class="ion-padding-vertical">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/home" />
          </IonButtons>
          <IonTitle> Notifications </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonBadge slot="end" color="success">1</IonBadge>
          <IonLabel>Voici un exemple de notifications</IonLabel>
        </IonItem>
        <IonItem>
          <IonBadge slot="end" color="success">+99</IonBadge>
          <IonLabel>Vous avez de nouveax likes</IonLabel>
        </IonItem>
        <IonItem>
          <IonBadge slot="end" color="success">5</IonBadge>
          <IonLabel>Vous avez de nouveax matchs</IonLabel>
        </IonItem>
      </IonContent>
    </>
  );
}