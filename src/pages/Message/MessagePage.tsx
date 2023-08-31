import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default function MessagePage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <IonTitle> MessagePage </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Message</h2>
      </IonContent>
    </>
  );
}