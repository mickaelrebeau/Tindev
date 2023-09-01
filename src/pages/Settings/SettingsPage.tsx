import { IonActionSheet, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import styles from './Settings.module.css';

export default function SettingsPage() {
  return (
    <>
      <IonHeader>

        <IonToolbar className="ion-padding-vertical">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profil"></IonBackButton>
          </IonButtons>
          <IonTitle> Paramètres </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div className={styles.content}>
          <div>
            <h2>Notifications</h2>
            <div className={styles.card}>
              <a>Adresse e-mail</a>
              <a>Notification Push</a>
            </div>
          </div>
          <div>
            <h2>Contacte-nous</h2>
            <div className={styles.card}>
              <a>Aide et assitance</a>
            </div>
          </div>
          <div>
            <h2>Confidentialités</h2>
            <div className={styles.card}>
              <a>Politique relative aux cookies</a>
              <a>Politique de confidentialité</a>
              <a>Préférences de confidentialité</a>
            </div>
          </div>
          <div>
            <h2>Mentions légales</h2>
            <div className={styles.card}>
              <a>Licenses</a>
              <a>Conditions d'utilisation</a>
            </div>
          </div>
          <div className={styles.btn}>
            <IonButton expand="block" color="danger" routerLink="/">Déconnexion</IonButton>
            <IonButton id="open-action-sheet" fill="outline" color="danger" expand="block">Supprimer votre Compte</IonButton>
          </div>
        </div>
      </IonContent>

      <IonActionSheet
        trigger="open-action-sheet"
        header="Etes-vous sûr de vouloir supprimer votre compte ?"
        buttons={[
          {
            text: 'Supprimer',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Annuler',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </>
  );
}