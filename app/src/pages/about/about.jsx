import React from "react";
import img from "Images/gordon.png";
import "./about.css"

class About extends React.Component {
  render() {
    return (
      <section className="section">
          <div className="container">
          <img src={img} /><br />
              <h1 className="crt content canvas">Gordon Gekko</h1>
          </div>
          <span className="crt">  ═══════[†]═══════  </span> <br /><br />
          
          <div className="crt canvas">The richest one percent of this country owns half our
          country's wealth, five trillion dollars. One third of that
          comes from hard work, two thirds comes from inheritance,  
          interest on interest accumulating to widows and idiot sons 
          and what I do, stock and real estate speculation. It's  
          bullshit. You got ninety percent of the American public out 
          there with little or no net worth. I create nothing. I own. 
          We make the rules, pal. The news, war, peace, famine, 
          upheaval, the price per paper clip. We pick that rabbit 
          out of the hat while everybody sits out there wondering 
          how the hell we did it. Now you're not naive enough to 
          think we're living in a democracy, are you buddy? It's 
          the free market. And you're a part of it. You've got that killer instinct.
          Stick around pal, I've still got a lot to teach you.</div>
          <br /> <br />

                     
          
      </section>
    );
  }
}

export default About;
