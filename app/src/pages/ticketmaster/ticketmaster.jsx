import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import img from "Images/Ticketmaster-Emblem.png"

class Ticketmaster extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
          <img src={img} />
          <br />
          <br />
          <div className="crt"> Ticketmaster  </div>
          <br />
          <span className="crt">  ═══════[†]═══════  </span> <br />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Ticketmaster;
