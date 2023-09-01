import { IonButton } from "@ionic/react";
import styles from "./Match.module.css";

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
        <div className={styles.cardMatch && styles.empty} />
      </IonButton>
    );
  }

  return (
    <IonButton fill="clear" className="match-box" href={props.link}>
      <div className={styles.cardMatch} />
    </IonButton>
  );
}
