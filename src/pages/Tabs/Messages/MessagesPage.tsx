import { IonButton, IonContent, IonIcon, IonList } from "@ionic/react";
import "./Messages.css";
import { useRef } from "react";
import { Header } from "../../../components/layout/Header";
import { IconShield } from "../../../assets";
import { SecurityModal } from "../../../components/modal/SecurityModal";
import { matches, messages } from "../../../services/utils/data.temp";
import { PreviewMessage } from "../../../components/message/PreviewMessage";
import { LikesCard } from "../../../components/message/LikesCard";
import { MatchCard } from "../../../components/message/MatchCard";

export default function MessagesPage() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <>
      <Header>
        <IonButton id="open-modal" size="large" fill="clear">
          <IonIcon slot="start" icon={IconShield} />
        </IonButton>
      </Header>

      <IonContent className="ion-padding">
        <div>
          <h2>Nouveaux Matchs</h2>
          <div className="msg-matchs">
            <LikesCard />
            {matches.map((match) => (
              <MatchCard key={match.id} {...match} />
            ))}
            {matches.length < 3 &&
              Array.from({ length: 3 - matches.length }, (_, i) => (
                <MatchCard key={i} empty />
              ))}
          </div>
        </div>

        <div className="msg-messages">
          <h2>Messages</h2>

          <IonList class="msg-list">
            {messages.map((message) => (
              <PreviewMessage key={message.id} {...message} />
            ))}
          </IonList>
        </div>
      </IonContent>

      <SecurityModal ref={modal} />
    </>
  );
}
