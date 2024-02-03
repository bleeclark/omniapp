import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";

class Cryptotracker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
              <h1 className="crt content canvas">Crypto Tracker</h1><br/>
          <span className="crt">  ═══════[†]═══════  </span> <br /><br />
          </div>

 <container class="main">
    <div class="left-nav">
      <div class="menu-item" onclick="openSection(event, 'tasks')" id="defaultOpen">

      </div>

      <div class="menu-item" onclick="openSection(event, 'add-task')">

      </div>

      <div class="menu-item" onclick="openSection(event, 'proxies')">

      </div>

      <div class="menu-item" onclick="openSection(event, 'profile')">

      </div>

      <div class="menu-item" onclick="openSection(event, 'configuration')">

      </div>
  
    </div>
  </container>

        </section>
      </React.Fragment>
    );
  }
}

export default Cryptotracker;
