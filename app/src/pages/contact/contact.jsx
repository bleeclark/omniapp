import React from "react";
import gif from "Images/contact.gif";

class contact extends React.Component {
  render() {
    return (
      <section className="section">
          <div className="container">
            <img src={gif} /><br /><br />

            <h2 className="crt content canvas">Contact</h2><br/>
            <span className="crt">  ═══════[†]═══════  </span> <br />
            <br />

          </div>
      </section>
    );
  }
}

export default contact;
