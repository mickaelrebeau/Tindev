import { IonButton, IonContent, IonIcon } from "@ionic/react";
import "./Sign.css";
import { IconEmail, IconGithub } from "../../assets";
import { Header } from "../../components/layout/Header";

export default function SignPage() {
  return (
    <>
      <Header />

      <IonContent className="ion-padding">
        <h2 className="sign-title">Tout commence par du code</h2>

        <div className="sign-content">
          <IonButton shape="round" expand="block" routerLink="/tabs/home">
            <IonIcon slot="start" icon={IconGithub} />
            Connexion avec Github
          </IonButton>

          <IonButton
            fill="outline"
            shape="round"
            expand="block"
            routerLink="/login"
          >
            <IonIcon slot="start" icon={IconEmail} />
            Connexion avec un Email
          </IonButton>

          <IonButton fill="clear" expand="block">
            Problème de connexion ?
          </IonButton>
        </div>
      </IonContent>
    </>
  );
}
