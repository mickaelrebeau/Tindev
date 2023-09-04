import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonList, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import styles from './Profil.module.css';
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
        <div className={styles.editContent}>
          <div className={styles.editContentInput}>
            <h2>Média</h2>
            <div className={styles.editCard}>
              <div className={styles.editCardImg}>
                <div className={styles.editCardBtn}>
                  <IonButton className={styles.editBtnIcon} size="small" fill="solid">
                    <IonIcon icon={IconAdd} />
                  </IonButton>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.editContentInput}>
            <h2>A propos de moi</h2>
            <IonInput label="Bio" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Nom de famille</h2>
            <IonInput label="Admin" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Prénom</h2>
            <IonInput label="Admin" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Pseudo</h2>
            <IonInput label="Admin" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Age</h2>
            <IonDatetime
              presentation="date"
              display-format="DD MMM YYYY"
              display-timezone="utc"></IonDatetime>
          </div>
          <div className={styles.editContentInput}>
            <h2>Niveau d'études</h2>
            <IonList>
              <IonItem>
                <IonSelect aria-label="etude" placeholder="Selectionnez votre niveau d'études" multiple={true}>
                  <IonSelectOption value="none">Ne souhaite pas le renseigner</IonSelectOption>
                  <IonSelectOption value="bac">Bac</IonSelectOption>
                  <IonSelectOption value="bts">BTS</IonSelectOption>
                  <IonSelectOption value="dut">DUT</IonSelectOption>
                  <IonSelectOption value="license">Licence</IonSelectOption>
                  <IonSelectOption value="master">Master</IonSelectOption>
                  <IonSelectOption value="doctorat">Doctorat</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </div>
          <div className={styles.editContentInput}>
            <h2>Mes langues</h2>
            <IonList>
              <IonItem>
                <IonSelect aria-label="languages" placeholder="Selectionnez votre niveau d'études" multiple={true}>
                  <IonSelectOption value="none">Ne souhaite pas le renseigner</IonSelectOption>
                  <IonSelectOption value="fr">Français</IonSelectOption>
                  <IonSelectOption value="en">Anglais</IonSelectOption>
                  <IonSelectOption value="es">Espagnol</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </div>
          <div className={styles.editContentInput}>
            <h2>Mes languages de programmation</h2>
            <IonList>
              <IonItem>
                <IonSelect aria-label="programmation" placeholder="Selectionnez votre niveau d'études" multiple={true}>
                  <IonSelectOption value="none">Ne souhaite pas le renseigner</IonSelectOption>
                  <IonSelectOption value="python">Python</IonSelectOption>
                  <IonSelectOption value="c">C</IonSelectOption>
                  <IonSelectOption value="c#">C#</IonSelectOption>
                  <IonSelectOption value="c++">c++</IonSelectOption>
                  <IonSelectOption value="java">Java</IonSelectOption>
                  <IonSelectOption value="php">PHP</IonSelectOption>
                  <IonSelectOption value="javascript">Javascript</IonSelectOption>
                  <IonSelectOption value="html">HTML</IonSelectOption>
                  <IonSelectOption value="css">CSS</IonSelectOption>
                  <IonSelectOption value="go">GO</IonSelectOption>
                  <IonSelectOption value="rust">Rust</IonSelectOption>
                  <IonSelectOption value="ruby">Ruby</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </div>
          <div className={styles.editContentInput}>
            <h2>Poste</h2>
            <IonInput label="Développeur Web" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Entreprise</h2>
            <IonInput label="Freelance" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Formation</h2>
            <IonInput label="ALT Incubateur Tech" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Lieu de résidence</h2>
            <IonInput label="In the world" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Github</h2>
            <IonInput label="mickaelrebeau" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Twitter</h2>
            <IonInput label="mike_dreeman" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Instagram</h2>
            <IonInput label="mike_photocollection" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Twitch</h2>
            <IonInput label="Mike_Dreeman" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Discord</h2>
            <IonInput label="mike_dreeman" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
          <div className={styles.editContentInput}>
            <h2>Portfolio</h2>
            <IonInput label="https://mickaelrebeau.github.io/Portfolio-React/" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
          </div>
        </div>
      </IonContent>
    </>
  );
}