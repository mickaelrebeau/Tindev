import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { IconShield } from "../../assets";
import { forwardRef } from "react";

type Props = {};

export const SecurityModal = forwardRef<HTMLIonModalElement, Props>(
  (_props, ref) => (
    <IonModal
      ref={ref}
      trigger="open-modal"
      initialBreakpoint={0.25}
      breakpoints={[0, 0.25]}
    >
      <IonContent className="ion-padding">
        <h2>Sécurité</h2>
        <IonButton fill="clear" size="large" routerLink="/tabs/profil/security">
          <IonIcon slot="start" size="large" icon={IconShield} />
          <div className="msg-modal">
            <h2>Paramètres de sécurité</h2>
          </div>
        </IonButton>
      </IonContent>
    </IonModal>
  )
);
