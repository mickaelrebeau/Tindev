import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export default function SettingsPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profil"></IonBackButton>
          </IonButtons>
          <IonTitle> SettingsPage </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Settings</h2>
      </IonContent>
    </>
  );
}