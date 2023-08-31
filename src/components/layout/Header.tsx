import { IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import { PropsWithChildren } from "react";
import IconFlamme from "../../assets/flame-outline.svg";
import styles from "./Header.module.css";
import clsx from "clsx";

type Props = PropsWithChildren<{}>;

export function Header({ children }: Props) {
  return (
    <IonHeader>
      <IonToolbar>
        <div className={clsx(styles.wrapper, { [styles.center]: !children })}>
          <div className={styles.titleWrapper}>
            <IonIcon slot="start" size="large" icon={IconFlamme} />
            <h2 className={styles.title}>tindev</h2>
          </div>

          <div className={styles.buttonsWrapper}>{children}</div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
}
