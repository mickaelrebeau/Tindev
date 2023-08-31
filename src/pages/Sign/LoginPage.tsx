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

import "./Sign.css";
import { IconFlamme } from "../../assets";

// !Remove duplicate

export default function LoginPage() {
  const [selectedSegment, setSelectedSegment] = useState("all");

  const [handleLogin, setHandleLogin] = useState({
    email: "",
    password: "",
  });

  const [handleSignUp, setHandleSignUp] = useState({
    email: "",
    password: "",
  });

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedSegment(event.detail.value);
  };

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(handleLogin);
  };

  const handleSubmitSignUp = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log(handleSignUp);
  };

  const handleChangeLogin = (
    event: IonInputCustomEvent<InputChangeEventDetail>
  ) => {
    const { name, value }: HTMLIonInputElement = event.target;
    setHandleLogin({ ...handleLogin, [name]: value });
  };

  const handleChangeSignUp = (
    event: IonInputCustomEvent<InputChangeEventDetail>
  ) => {
    const { name, value }: HTMLIonInputElement = event.target;
    setHandleSignUp({ ...handleSignUp, [name]: value });
  };

  return (
    <>
      <IonHeader>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <div className="sign-logo">
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
          <div className="center-form">
            <form onSubmit={handleSubmitSignUp}>
              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChangeSignUp(e)}
                  label="Email"
                  labelPlacement="floating"
                  value={handleSignUp.email}
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
                  onIonInput={(e) => handleChangeSignUp(e)}
                  id="custom-input"
                  label="Mot de passe"
                  labelPlacement="floating"
                  value={handleSignUp.password}
                />
              </IonItem>

              <IonItem>
                <IonInput
                  label="Confirmation de mot de passe"
                  labelPlacement="floating"
                />
              </IonItem>

              <IonCheckbox className="checkbox" labelPlacement="end">
                Accepter les termes et conditions d'utilisations
              </IonCheckbox>

              <IonButton className="custom-button" routerLink="/tabs/home">
                S'inscrire
              </IonButton>
            </form>
          </div>
        )}
        {selectedSegment === "all" && (
          <div className="center-form">
            <form onSubmit={handleSubmitLogin}>
              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChangeLogin(e)}
                  label="Email"
                  labelPlacement="floating"
                  name="email"
                  value={handleLogin.email}
                />
              </IonItem>

              <IonItem>
                <IonInput
                  onIonInput={(e) => handleChangeLogin(e)}
                  id="custom-input"
                  label="Mot de passe"
                  labelPlacement="floating"
                  name="password"
                  value={handleLogin.password}
                />
              </IonItem>

              <IonButton className="custom-button" routerLink="/tabs/home">
                Se connecter
              </IonButton>
            </form>
          </div>
        )}
      </IonContent>
    </>
  );
}
