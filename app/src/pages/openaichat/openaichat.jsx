import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import img from "Images/openai.png";

class Openaichat extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
          <img src={img} />
          <div className="crt"> Open AI Chat  </div>
          <br />
          <span className="crt">  ═══════[†]═══════  </span> <br />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Openaichat;