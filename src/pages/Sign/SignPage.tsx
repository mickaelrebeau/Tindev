import { IonButton, IonContent, IonIcon } from "@ionic/react";
import styles from "./Sign.module.css";
import { IconEmail, IconGithub } from "../../assets";
import { Header } from "../../components/layout/Header";

export default function SignPage() {
  return (
    <>
      <Header />

      <IonContent className="ion-padding">
        <h2 className={styles.title}>Tout commence par du code</h2>

        <div className={styles.content}>
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
