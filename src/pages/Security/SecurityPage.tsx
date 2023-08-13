import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default function SecurityPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profil"></IonBackButton>
          </IonButtons>
          <IonTitle> SecurityPage </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Security</h2>
      </IonContent>
    </>
  );
}