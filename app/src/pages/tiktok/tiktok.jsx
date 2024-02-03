import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import img from "Images/Tiktok_Logo.png";

class Tiktok extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
  <img src={img} /><br /><br />

                <div className="crt"> Tik Tok  </div>
        <br />
        <span className="crt">  ═══════[†]═══════  </span> <br />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Tiktok;