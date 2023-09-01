import { IonIcon, IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { IconCertif, IconSend } from "../../assets";
import styles from "./Match.module.css";

export function PreviewMessage({
  id,
  srcImg,
  title,
  certif,
  send,
  content,
}: Message) {
  return (
    <IonItem className={styles.item} href={`/tabs/message/${id}`}>
      <IonThumbnail slot="start">
        <img className={styles.img} alt="Image of the message" src={srcImg} />
      </IonThumbnail>
      <div>
        <IonLabel>
          <div className={styles.itecertifm}>
            <h3>{title}</h3>
            {certif && <IonIcon slot="end" icon={IconCertif} />}
          </div>
        </IonLabel>
        <IonLabel className={styles.sending}>
          {send && <IonIcon slot="start" icon={IconSend} />}
          <span>{content}</span>
        </IonLabel>
      </div>
    </IonItem>
  );
}
