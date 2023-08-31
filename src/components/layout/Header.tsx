import { IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import { PropsWithChildren } from "react";
import IconFlamme from "../../assets/flame-outline.svg";

type Props = PropsWithChildren<{}>;

export function Header({ children }: Props) {
  return (
    <IonHeader>
      <IonToolbar>
        <div className="msg-header">
          <div className="msg-logo">
            <IonIcon slot="start" size="large" icon={IconFlamme} />
            <h2>tindev</h2>
          </div>

          <div className="profil-header-btn">{children}</div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
}
