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
 const stylesCombine = styles.cardMatch+ " " +styles.empty

  if (props.empty) {
    return (
      <IonButton fill="clear" disabled className={styles.box}>
        <div className={stylesCombine} />
      </IonButton>
    );
  }

  return (
    <IonButton fill="clear" className={styles.box} href={props.link}>
      <div className={styles.cardMatch} />
    </IonButton>
  );
}
