import { IonActionSheet, IonButton, IonChip, IonContent, IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import flamme from '../../../assets/flame-outline.svg'
import notif from '../../../assets/notifications-outline.svg'
import heart from '../../../assets/heart.svg'
import skip from '../../../assets/close.svg'
import alert from '../../../assets/alert-outline.svg'
import github from '../../../assets/logo-github.svg'
import google from '../../../assets/logo-google.svg'
import twitter from '../../../assets/logo-twitter.svg'
import twitch from '../../../assets/logo-twitch.svg'
import insta from '../../../assets/logo-instagram.svg'
import './Home.css'

export default function HomePage() {
  return (
    <>
      <IonHeader>

        <IonToolbar>
          <div className="home-header">
            <div className="home-logo">
              <IonIcon slot="start" size="large" icon={flamme}></IonIcon>
              <h2>tindev</h2>
            </div>

            <IonButton fill="clear" size="large" routerLink="/tabs/home/notifications">
              <IonIcon icon={notif}></IonIcon>
            </IonButton>
          </div>
        </IonToolbar>

      </IonHeader>

      <IonContent className="ion-padding">
        <div className="home-content">
          <div className="home-card">
            <div className="home-card-title">
              <h2>Admin</h2>
              <img className="home-img" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            </div>
            <div className="home-card-text">
              <h3>Administrateur réseaux</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="home-labels">
              <IonChip outline={true}>Python</IonChip>
              <IonChip outline={true}>C</IonChip>
              <IonChip outline={true}>C#</IonChip>
              <IonChip outline={true}>C++</IonChip>
              <IonChip outline={true}>Java</IonChip>
              <IonChip outline={true}>PHP</IonChip>
              <IonChip outline={true}>Javascript</IonChip>
              <IonChip outline={true}>HTML</IonChip>
              <IonChip outline={true}>CSS</IonChip>
              <IonChip outline={true}>Go</IonChip>
              <IonChip outline={true}>Rust</IonChip>
              <IonChip outline={true}>Ruby</IonChip>
            </div>
            <div className="home-socials">
              <IonIcon size="large" icon={github} />
              <IonIcon size="large" icon={google} />
              <IonIcon size="large" icon={twitter} />
              <IonIcon size="large" icon={insta} />
              <IonIcon size="large" icon={twitch} />
            </div>
          </div>
          <div className="home-actions">
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={skip} />
            </IonButton>
            <IonButton id="open-action-sheet" fill="outline" size="small" className="home-small-btn">
              <IonIcon icon={alert} />
            </IonButton>
            <IonButton fill="outline" size="large" className="home-lareg-btn">
              <IonIcon icon={heart} />
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Signaler',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Bloquer',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Annuler',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </>
  );
}