import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";

import MessagesPage from "../../pages/Tabs/Messages/MessagesPage";
import ProfilPage from "../../pages/Tabs/Profil/ProfilPage";
import ProfilEditPage from "../../pages/Tabs/Profil/ProfilEditPage";
import HomePage from "../../pages/Tabs/Home/HomePage";
import NotificationsPage from "../../pages/Tabs/Home/NotificationsPage";
import SecurityPage from "../../pages/Security/SecurityPage";
import SettingsPage from "../../pages/Settings/SettingsPage";
import MessagePage from "../../pages/Message/MessagePage";
import { IconHome, IconMessages, IconProfil } from "../../assets";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/messages" component={MessagesPage} />
        <Route exact path="/tabs/message/:id" component={MessagePage} />

        <Route exact path="/tabs/home" component={HomePage} />
        <Route
          exact
          path="/tabs/home/notifications"
          component={NotificationsPage}
        />

        <Route exact path="/tabs/profil" component={ProfilPage} />
        <Route exact path="/tabs/profil/edit" component={ProfilEditPage} />
        <Route exact path="/tabs/profil/security" component={SecurityPage} />
        <Route exact path="/tabs/profil/settings" component={SettingsPage} />

        <Route exact path="/tabs">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="request" href="/tabs/messages">
          <IonIcon aria-hidden="true" icon={IconMessages} />
        </IonTabButton>

        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon aria-hidden="true" icon={IconHome} />
        </IonTabButton>

        <IonTabButton tab="profil" href="/tabs/profil">
          <IonIcon aria-hidden="true" icon={IconProfil} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
