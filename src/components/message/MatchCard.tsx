import { IonButton } from "@ionic/react";

type EmptyMatch = {
  empty: true;
};

type ResultMatch = Match & {
  empty?: false;
};

type Props = EmptyMatch | ResultMatch;

export function MatchCard(props: Props) {
  if (props.empty) {
    return (
      <IonButton fill="clear" disabled className="match-box">
        <div className="msg-card-match empty" />
      </IonButton>
    );
  }

  return (
    <IonButton fill="clear" className="match-box" href={props.link}>
      <div className="msg-card-match" />
    </IonButton>
  );
}
