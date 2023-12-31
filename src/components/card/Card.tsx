import { IonChip, IonIcon } from "@ionic/react";
import styles from "./Card.module.css";
import {
  IconGithub,
  IconGoogle,
  IconInsta,
  IconTwitch,
  IconTwitter,
} from "@/assets";

type Props = {
  name: string;
};

export default function Card({ name }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h2>{name}</h2>
        <img
          className={styles.img}
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
        />
      </div>
      <div className={styles.cardText}>
        <h3>Administrateur réseaux</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={styles.labels}>
        <IonChip outline>Python</IonChip>
        <IonChip outline>C</IonChip>
        <IonChip outline>C#</IonChip>
        <IonChip outline>C++</IonChip>
        <IonChip outline>Java</IonChip>
        <IonChip outline>PHP</IonChip>
        <IonChip outline>Javascript</IonChip>
        <IonChip outline>HTML</IonChip>
        <IonChip outline>CSS</IonChip>
        <IonChip outline>Go</IonChip>
        <IonChip outline>Rust</IonChip>
        <IonChip outline>Ruby</IonChip>
      </div>
      <div className={styles.socials}>
        <IonIcon size="large" icon={IconGithub} />
        <IonIcon size="large" icon={IconGoogle} />
        <IonIcon size="large" icon={IconTwitter} />
        <IonIcon size="large" icon={IconInsta} />
        <IonIcon size="large" icon={IconTwitch} />
      </div>
    </div>
  );
}
