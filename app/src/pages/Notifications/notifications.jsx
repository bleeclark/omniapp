import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import discord_img from "Images/discord.png";
import slack_img from "Images/slack.png";
import telegram_img from "Images/telegram.png";



class notifications extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">

        <div className="crt">Notifications</div>
        <br />
        <span className="crt">  ═══════[†]═══════  </span> <br />
            <div class="webhook">
              <h4>Discord Webhook</h4>
              <input type="text" placeholder="Discord URL"></input>
              <img src={discord_img} /><br /><br />
              <h4>Telegram Webhook</h4>
              <input type="text" placeholder="Telegram URL"></input>
              <img src={telegram_img} /><br /><br />
              <h4>Slack Webhook</h4>
              <input type="text" placeholder="Slack URL"></input>
              <img src={slack_img} /><br /><br />
              <h4>SMS</h4>
              <input type="text" placeholder="SMS URL"></input>
              <h4>Email</h4>
              <input type="text" placeholder="Webhook URL"></input>
            </div>



        </section>
      </React.Fragment>
    );
  }
}

export default notifications;
