import { IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import github from '../../assets/logo-github.svg'
import flamme from '../../assets/flame-outline.svg'
import email from '../../assets/mail-outline.svg'
import './Sign.css'

export default function SignPage() {
  return (
    <>
      <IonHeader>

        <div className="sign-logo">
          <IonIcon slot="start" size="large" icon={flamme}></IonIcon>
          <h2>tindev</h2>
        </div>

      </IonHeader>

      <IonContent className="ion-padding">

        <h2 className="sign-title">Tout commence par du code</h2>

        <div className="sign-content">

          <IonButton shape="round" expand="block" routerLink="/tabs/home">
            <IonIcon slot="start" icon={github}></IonIcon>
            Connexion avec Github
          </IonButton>

          <IonButton fill="outline" shape="round" expand="block" routerLink="/login">
            <IonIcon slot="start" icon={email}></IonIcon>
            Connexion avec un Email
          </IonButton>

          <IonButton fill="clear" expand="block">Problème de connexion ?</IonButton>
        </div>
      </IonContent>
    </>
  );
}