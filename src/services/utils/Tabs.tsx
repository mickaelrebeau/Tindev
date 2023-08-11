import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, } from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";

import msg from '../../assets/chatbubbles-outline.svg';
import home from '../../assets/flame-outline.svg';
import profil from '../../assets/person-outline.svg';

import MessagesPage from "../../pages/Tabs/Messages/MessagesPage";
import ProfilPage from "../../pages/Tabs/Profil/ProfilPage";
import HomePage from "../../pages/Tabs/Home/HomePage";
  
  
  const Tabs: React.FC = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>

          <Route exact path="/tabs/messages" component={MessagesPage} />
  
          <Route exact path="/tabs/home" component={HomePage} />
          
          <Route exact path="/tabs/profil" component={ProfilPage} />
    
          <Route exact path="/tabs">
            <Redirect to="/tabs/home"></Redirect>
          </Route>
  
        </IonRouterOutlet>
  
        <IonTabBar slot="bottom">
  
          <IonTabButton tab="request" href="/tabs/messages">
            <IonIcon aria-hidden="true" icon={msg} />
          </IonTabButton>
  
          <IonTabButton tab="home" href="/tabs/home">
            <IonIcon aria-hidden="true" icon={home} />
          </IonTabButton>
  
          <IonTabButton tab="profil" href="/tabs/profil">
            <IonIcon aria-hidden="true" icon={profil} />
          </IonTabButton>
  
        </IonTabBar>
  
      </IonTabs>
    );
  };
  
  export default Tabs;