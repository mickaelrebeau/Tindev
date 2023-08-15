import { IonBackButton, IonButtons, IonContent, IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";

export default function SecurityPage() {
  const [selectedSegment, setSelectedSegment] = useState("all");

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profil"></IonBackButton>
          </IonButtons>
          <IonTitle> Centre Sécurité </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
            <IonSegmentButton value="favorites">
              <IonLabel>Sécurité</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="all">
              <IonLabel>Resources</IonLabel>
            </IonSegmentButton>
          </IonSegment>
      </IonContent>
    </>
  );
}