import { IonIcon, IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { IconCertif, IconSend } from "../../assets";

export function PreviewMessage({
  id,
  srcImg,
  title,
  certif,
  send,
  content,
}: Message) {
  return (
    <IonItem className="msg-item" href={`/tabs/message/${id}`}>
      <IonThumbnail slot="start">
        <img className="msg-img" alt="Image of the message" src={srcImg} />
      </IonThumbnail>
      <div>
        <IonLabel>
          <div className="msg-certif">
            <h3>{title}</h3>
            {certif && <IonIcon slot="end" icon={IconCertif} />}
          </div>
        </IonLabel>
        <IonLabel className="msg-sending">
          {send && <IonIcon slot="start" icon={IconSend} />}
          <span>{content}</span>
        </IonLabel>
      </div>
    </IonItem>
  );
}
