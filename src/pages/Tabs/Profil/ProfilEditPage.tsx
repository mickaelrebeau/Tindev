import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonTitle, IonToolbar } from "@ionic/react";
import './Profil.css'
import { IconAdd } from "../../../assets";

export default function ProfilPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar className="ion-padding-vertical">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profil"></IonBackButton>
          </IonButtons>
          <IonTitle> Modification du profil </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div className="edit-content">
          <div className="edit-content-input">
            <h2>Média</h2>
            <div className="edit-card">
              <div className="edit-card-img">
                <div className="edit-card-btn">
                  <IonButton className="edit-btn-icon" size="small" fill="solid">
                    <IonIcon icon={IconAdd} />
                  </IonButton>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-content-input">
            <h2>A propos de moi</h2>
            <IonInput label="Bio" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Nom de famille</h2>
            <IonInput label="Admin" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Prénom</h2>
            <IonInput label="Admin" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Pseudo</h2>
            <IonInput label="Admin" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Age</h2>
            <IonInput label="99" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Niveau d'études</h2>
            <IonInput label="Licence" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Mes langues</h2>
            <IonInput label="Français, Anglais" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Poste</h2>
            <IonInput label="Développeur Web" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Entreprise</h2>
            <IonInput label="Freelance" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Formation</h2>
            <IonInput label="ALT Incubateur Tech" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Lieu de résidence</h2>
            <IonInput label="In the world" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Github</h2>
            <IonInput label="https://github.com/mickaelrebeau" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Portfolio</h2>
            <IonInput label="https://mickaelrebeau.github.io/Portfolio-React/" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Autre Site</h2>
            <IonInput label="URL..." labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className="edit-content-input">
            <h2>Discord</h2>
            <IonInput label="mike_dreeman" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
        </div>
      </IonContent>
    </>
  );
}