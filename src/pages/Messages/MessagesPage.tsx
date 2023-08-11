import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default function MessagesPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <IonTitle> MessagesPage </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Messages</h2>
      </IonContent>
    </>
  );
}