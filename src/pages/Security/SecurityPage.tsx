import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import "./Security.css";
import call from "../../assets/call-outline.svg"

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
            <IonBackButton defaultHref="/tabs/profil"></IonBackButton>
          </IonButtons>
          <IonTitle> Centre Sécurité </IonTitle>
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
              <div>
                <h2>Stop Violences Femmes</h2>
                <div className="call">
                  <IonIcon size="small" icon={call} />
                  <p>0 800 05 95 95</p>
                </div>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Planning Familial</h2>
                <div className="call">
                  <IonIcon size="small" icon={call} />
                  <p>0 800 08 11 11</p>
                </div>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Arrêtons les violences</h2>
                <div className="call">
                  <IonIcon size="small" icon={call} />
                  <p>3919</p>
                </div>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Contre la Traite</h2>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Enfants Disparus</h2>
                <div className="call">
                  <IonIcon size="small" icon={call} />
                  <p>116 000</p>
                </div>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Commission nationale de l'information et des libertés</h2>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Cyber Malveillance</h2>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>Ministère de l'Intérieur - Signalement Internet</h2>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
              <div>
                <h2>SOS Homophobie</h2>
                <div className="call">
                  <IonIcon size="small" icon={call} />
                  <p>01 48 06 42 41</p>
                </div>
                <IonButton size="small" fill="outline">Aller sur le site</IonButton>
              </div>
            </div>
          )}
          {selectedSegment === "all" && (
            <div></div>
          )}
      </IonContent>
    </>
  );
}