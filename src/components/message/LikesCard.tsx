import { IonButton } from "@ionic/react";
import "./Match.css";
import { matches } from "../../services/utils/data.temp";

export function LikesCard() {
  const { srcImg, numberOfLikes } = { srcImg: "", numberOfLikes: matches.length };
  // ! Récupérer le nombre de likes dans la DB
  // ! Récupérer l'image du dernier like

  return (
    <IonButton fill="clear" className="match-box" href="/tabs/home">
      {numberOfLikes === 0 ? (
        <div className="msg-card-match" />
      ) : (
        `${numberOfLikes} likes`
      )}
    </IonButton>
  );
}