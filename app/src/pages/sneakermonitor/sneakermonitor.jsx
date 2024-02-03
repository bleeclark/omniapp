import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import "./sneakermonitor.css"
/*
import img from "Images/benjamin.png";
import img from "Images/benjamin.png";
*/


class sneakermonitor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
                    <h2 className="crt content canvas">Sneaker Monitor</h2><br/>
            <span className="crt">  ═══════[†]═══════  </span> <br />
            <br />
<div className="sneakerBox">

  <div class="container ">
    <div class="card asics">
      <p class="price">$65 USD</p>
      
        <i class="info fas fa-info-circle"></i>
        <p class="text">
          Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
        </p>
      

      <div class="contentBx  ">
        <h2>Asics</h2>
        <div class="size">
          <h3>Size :</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div class="color">
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button> Add to Cart</button>
      </div>
    </div>
  </div>

  <div class="container ">
    <div class="card adidas">
      <p class="price">$30 USD</p>
      <i class="info fas fa-info-circle"></i>
        <p class="text">
          Effortless comfortable full leather lining eye-catching   unique detail to the toe low 'cut-away' sides           clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel            this ladylike design. Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point                raised heel drop sides unique silhouette. Effortless comfortable full leather lining eye-catching unique          detail to the toe low 'cut-away' sides clean and sleek.
      
        </p>
      

      <div class="contentBx  ">
        <h2>Adidas</h2>
        <div class="size">
          <h3>Size :</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div class="color">
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button> Add to Cart</button>
      </div>
    </div>
  </div>

  <div class="container ">
    <div class="card new-balance">
      <p class="price">$45 USD</p>
      <i class="info fas fa-info-circle"></i>
        <p class="text">
          Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.
        </p>

      <div class="contentBx">
        <h2>New Balance</h2>
        <div class="size">
          <h3>Size :</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div class="color">
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <button> Add to Cart</button>
      </div>
    </div>
  </div>

</div>

        </section>
      </React.Fragment>
    );
  }
}

export default sneakermonitor;