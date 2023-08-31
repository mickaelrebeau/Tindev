import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Security.css";
import { Resource } from "../../components/security/Resource";

export default function SecurityPage() {
  const [selectedSegment, setSelectedSegment] = useState("favorites");

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };
  return (
    <>
      <IonHeader>
        <IonToolbar className="ion-padding-vertical">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profil" />
          </IonButtons>
          <IonTitle>Centre Sécurité</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
          <IonSegmentButton value="favorites">
            <IonLabel>Resources</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="all">
            <IonLabel>Sécurité</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {selectedSegment === "favorites" && (
          <div className="resources-content">
            <Resource
              title="Stop Violences Femmes"
              phoneNumber="0 800 05 95 95"
            />
            <Resource title="Planning Familial" phoneNumber="0 800 08 11 11" />
            <Resource title="Arrêtons les violencess" phoneNumber="3919" />
            <Resource title="Contre la Traite" />
            <Resource title="Enfants Disparus" phoneNumber="116 000" />
            <Resource title="Commission nationale de l'information et des libertés" />
            <Resource title="Cyber Malveillance" />
            <Resource title="Ministère de l'Intérieur - Signalement Internet" />
            <Resource title="SOS Homophobie" phoneNumber="01 48 06 42 41" />
          </div>
        )}
        {selectedSegment === "all" && <div></div>}
      </IonContent>
    </>
  );
}
