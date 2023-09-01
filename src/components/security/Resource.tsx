import { IonButton, IonIcon } from "@ionic/react";
import { IconCall } from "../../assets";
import styles from './Ressource.module.css';

type Props = {
  title: string;
  phoneNumber?: string;
  link?: string;
};

export function Resource({ title, phoneNumber, link }: Props) {
  return (
    <>
      <h2>{title}</h2>
      {phoneNumber && (
        <div className={styles.call}>
          <IonIcon size="small" icon={IconCall} />
          <p>{phoneNumber}</p>
        </div>
      )}
      <IonButton size="small" fill="outline" href={link}>
        Aller sur le site
      </IonButton>
    </>
  );
}
