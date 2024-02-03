import React from "react";
import { Routes, Route } from "react-router";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Welcome = loadable(() =>
  import(/* webpackChunkName: "WelcomeChunk" */ "Pages/welcome/welcome")
);
const About = loadable(() =>
  import(/* webpackChunkName: "AboutChunk" */ "Pages/about/about")
);
const Motd = loadable(() =>
  import(/* webpackChunkName: "MotdChunk" */ "Pages/motd/motd")
);
const Localization = loadable(() =>
  import(
    /* webpackChunkName: "LocalizationChunk" */ "Pages/localization/localization"
  )
);
const UndoRedo = loadable(() =>
  import(/* webpackChunkName: "UndoRedoChunk" */ "Pages/undoredo/undoredo")
);
const ContextMenu = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/contextmenu/contextmenu")
);
const Image = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/image/image")
);
const Instagram = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/instagram/instagram")
);
const Manchesterunited = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/manchesterunited/manchesterunited")
);
const Aitrading = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/aitrading/aitrading")
);
const Aviator = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/aviator/aviator")
);
const Cryptotracker = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/cryptotracker/cryptotracker")
);
const Openaichat = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/openaichat/openaichat")
);
const Sneakermonitor = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/sneakermonitor/sneakermonitor")
);
const Ticketmaster = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/ticketmaster/ticketmaster")
);
const Tiktok = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/tiktok/tiktok")
);
const Aiscraper = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/aiscraper/aiscraper")
);
const Settings = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/settings/settings")
);
const Notifications = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/notifications/notifications")
);
const Chat = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/chat/chat")
);
const Contact = loadable(() =>
  import(/* webpackChunkName: "ContextMenuChunk" */ "Pages/contact/contact")
);



class AppRoutes extends React.Component {
  render() {    
    return (
      <Routes>
        <Route path={ROUTES.WELCOME} element={<Welcome />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.MOTD} element={<Motd />}></Route>
        <Route path={ROUTES.LOCALIZATION} element={<Localization />}></Route>
        <Route path={ROUTES.UNDOREDO} element={<UndoRedo />}></Route>
        <Route path={ROUTES.CONTEXTMENU} element={<ContextMenu />}></Route>
        <Route path={ROUTES.IMAGE} element={<Image />}></Route>
        <Route path={ROUTES.INSTAGRAM} element={<Instagram />}></Route>
        <Route path={ROUTES.MANCHESTERUNITED} element={<Manchesterunited />}></Route>
        <Route path={ROUTES.AITRADING} element={<Aitrading />}></Route>
        <Route path={ROUTES.AVIATOR} element={<Aviator />}></Route>
        <Route path={ROUTES.CRYPTOTRACKER} element={<Cryptotracker />}></Route>
        <Route path={ROUTES.OPENAICHAT} element={<Openaichat />}></Route>
        <Route path={ROUTES.SNEAKERMONITOR} element={<Sneakermonitor />}></Route>
        <Route path={ROUTES.TICKETMASTER} element={<Ticketmaster />}></Route>
        <Route path={ROUTES.TIKTOK} element={<Tiktok />}></Route>
        <Route path={ROUTES.AISCRAPER} element={<Aiscraper />}></Route>
        <Route path={ROUTES.SETTINGS} element={<Settings />}></Route>
        <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />}></Route>
        <Route path={ROUTES.CHAT} element={<Chat />}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact />}></Route>
      </Routes>
    );
  }
}

export default AppRoutes;
