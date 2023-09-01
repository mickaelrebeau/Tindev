import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { InputChangeEventDetail, IonInputCustomEvent } from "@ionic/core";

import { useState } from "react";

import styles from "./Sign.module.css";
import { IconFlamme } from "../../assets";

export default function LoginPage() {
  const [selectedSegment, setSelectedSegment] = useState("all");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(user);
  };

  const handleSubmitSignUp = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log(user);
  };

  const handleChange = (
    event: IonInputCustomEvent<InputChangeEventDetail>
  ) => {
    const { name, value }: HTMLIonInputElement = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <IonHeader>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <div className={styles.logo}>
          <IonIcon slot="start" size="large" icon={IconFlamme} />
          <h2>tindev</h2>
        </div>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
          <IonSegmentButton value="favorites">
            <IonLabel>Inscription</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="all">
            <IonLabel>Connexion</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {selectedSegment === "favorites" && (
          <div className={styles.form}>
            <form onSubmit={handleSubmitSignUp}>
              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChange(e)}
                  label="Email"
                  labelPlacement="floating"
                  value={user.email}
                />
              </IonItem>

              <IonItem>
                <IonInput
                  label="Confirmation d'email"
                  labelPlacement="floating"
                />
              </IonItem>

              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChange(e)}
                  id="custom-input"
                  label="Mot de passe"
                  labelPlacement="floating"
                  value={user.password}
                />
              </IonItem>

              <IonItem>
                <IonInput
                  label="Confirmation de mot de passe"
                  labelPlacement="floating"
                />
              </IonItem>

              <IonCheckbox className={styles.checkbox} labelPlacement="end">
                Accepter les termes et conditions d'utilisations
              </IonCheckbox>

              <IonButton className={styles.customButton} routerLink="/tabs/home">
                S'inscrire
              </IonButton>
            </form>
          </div>
        )}
        {selectedSegment === "all" && (
          <div className={styles.form}>
            <form onSubmit={handleSubmitLogin}>
              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChange(e)}
                  label="Email"
                  labelPlacement="floating"
                  name="email"
                  value={user.email}
                />
              </IonItem>

              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChange(e)}
                  id="custom-input"
                  label="Mot de passe"
                  labelPlacement="floating"
                  name="password"
                  value={user.password}
                />
              </IonItem>

              <IonButton className={styles.customButton} routerLink="/tabs/home">
                Se connecter
              </IonButton>
            </form>
          </div>
        )}
      </IonContent>
    </>
  );
}
