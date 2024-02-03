import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <section className="hero is-info">
              <div className="hero-body">
                <p className="title">
                  Thank you for trying out the secure-electron-template!
                </p>
                <p className="subtitle">
                  Please navigate to view the features of this template.
                </p>
              </div>
            </section>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="title is-2">Samples</h2>
            <div>
              <Link to={ROUTES.MOTD}>Using the Electron store.</Link> <br />
              <Link to={ROUTES.LOCALIZATION}>Changing locales.</Link> <br />
              <Link to={ROUTES.UNDOREDO}>Undo/redoing actions.</Link> <br />
              <Link to={ROUTES.CONTEXTMENU}>Custom context menu.</Link> <br />
              <Link to={ROUTES.IMAGE}>Sample image loaded.</Link> <br />

              <Link to={ROUTES.IMAGE}>Automatic Crypto Trading</Link> <br />
              <Link to={ROUTES.IMAGE}>AI Trading</Link> <br />
              <Link to={ROUTES.IMAGE}>Automatic Stock Trading</Link> <br />
              <Link to={ROUTES.IMAGE}>Aviator</Link> <br />
              <Link to={ROUTES.IMAGE}>Crypto Tracker</Link> <br />
              <Link to={ROUTES.IMAGE}>Automatic Forex Trading</Link> <br />
              <Link to={ROUTES.IMAGE}>Instagram</Link> <br />
              <Link to={ROUTES.IMAGE}>Manchester United</Link> <br />
              <Link to={ROUTES.IMAGE}>Open Ai Chat</Link> <br />
              <Link to={ROUTES.IMAGE}>Sneaker Monitor</Link> <br />
              <Link to={ROUTES.IMAGE}>TicketMaster</Link> <br />
              <Link to={ROUTES.IMAGE}>Tik Tok</Link> <br />



            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Welcome;
