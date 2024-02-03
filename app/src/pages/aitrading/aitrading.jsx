import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import "./aitrading.css"


class Aitrading extends React.Component {
  

  render() {
    return (
      <React.Fragment>

        <section className="section">
            <h2 className="crt content canvas">Ultimate Trading</h2><br/>
            <span className="crt">  ═══════[†]═══════  </span> <br />
            <br />
        <body>
        <div id="container">
        <div class="left-part dimension-3d">
            <div class="multiple-bars">
                <div class="multiple-bar">
                    <div class="vertical-bar vertical-bar-1">
                        <div class="inner-bar inner-bar-1"></div>
                        <div class="inner-bar inner-bar-2"></div>
                        <div class="inner-bar inner-bar-3"></div>
                        <div class="inner-bar inner-bar-4"></div>
                        <div class="inner-bar inner-bar-5"></div>
                        <div class="inner-bar inner-bar-6"></div>
                        <div class="inner-bar inner-bar-7"></div>
                        <div class="inner-bar inner-bar-8"></div>
                        <div class="inner-bar inner-bar-9"></div>
                        <div class="inner-bar inner-bar-10"></div>
                    </div>
                </div>
                <div class="multiple-bar">
                    <div class="vertical-bar vertical-bar-2">
                        <div class="inner-bar inner-bar-1"></div>
                        <div class="inner-bar inner-bar-2"></div>
                        <div class="inner-bar inner-bar-3"></div>
                        <div class="inner-bar inner-bar-4"></div>
                        <div class="inner-bar inner-bar-5"></div>
                        <div class="inner-bar inner-bar-6"></div>
                        <div class="inner-bar inner-bar-7"></div>
                        <div class="inner-bar inner-bar-8"></div>
                        <div class="inner-bar inner-bar-9"></div>
                        <div class="inner-bar inner-bar-10"></div>
                    </div>
                </div>
                <div class="multiple-bar">
                    <div class="vertical-bar vertical-bar-3">
                        <div class="inner-bar inner-bar-1"></div>
                        <div class="inner-bar inner-bar-2"></div>
                        <div class="inner-bar inner-bar-3"></div>
                        <div class="inner-bar inner-bar-4"></div>
                        <div class="inner-bar inner-bar-5"></div>
                        <div class="inner-bar inner-bar-6"></div>
                        <div class="inner-bar inner-bar-7"></div>
                        <div class="inner-bar inner-bar-8"></div>
                        <div class="inner-bar inner-bar-9"></div>
                        <div class="inner-bar inner-bar-10"></div>
                    </div>
                </div>
                <div class="multiple-bar">
                    <div class="vertical-bar vertical-bar-4">
                        <div class="inner-bar inner-bar-1"></div>
                        <div class="inner-bar inner-bar-2"></div>
                        <div class="inner-bar inner-bar-3"></div>
                        <div class="inner-bar inner-bar-4"></div>
                        <div class="inner-bar inner-bar-5"></div>
                        <div class="inner-bar inner-bar-6"></div>
                        <div class="inner-bar inner-bar-7"></div>
                        <div class="inner-bar inner-bar-8"></div>
                        <div class="inner-bar inner-bar-9"></div>
                        <div class="inner-bar inner-bar-10"></div>
                    </div>
                </div>
                <div class="multiple-bar">
                    <div class="vertical-bar vertical-bar-5">
                        <div class="inner-bar inner-bar-1"></div>
                        <div class="inner-bar inner-bar-2"></div>
                        <div class="inner-bar inner-bar-3"></div>
                        <div class="inner-bar inner-bar-4"></div>
                        <div class="inner-bar inner-bar-5"></div>
                        <div class="inner-bar inner-bar-6"></div>
                        <div class="inner-bar inner-bar-7"></div>
                        <div class="inner-bar inner-bar-8"></div>
                        <div class="inner-bar inner-bar-9"></div>
                        <div class="inner-bar inner-bar-10"></div>
                    </div>
                </div>
                <ul>
                    <li>POWER</li>
                    <li>REAR ENGINE</li>
                    <li>FRONT ENGINE</li>
                    <li>SHIELD</li>
                    <li>WEAPONS</li>
                </ul>
            </div>
            <div class="text-bubble">
                <p>Gellix was given to the krogran after the Rachni Wars, but bitterly contested in the Krogan
                    Rebellions and reconquered by the turians. This left the turians as caretakers to a
                    levo-amino-acid-based world that they could not inhabit themselves but were unwilling to give up.
                    In cooperation with the Vol Protectorate, the turians attempted to rent the planet out for
                    colonization. Between the high price and a surface littered with unexploded ordnance, however,
                    Gellix found few reputable tenants. Its most notable inhabitants were penal colonies.</p>
            </div>
            <ul class="gazes">
                <li>
                    <div class="charge charge-1"></div>
                    <div class="li-content">
                        <div>Relative Strength</div>
                        <div class="cube">
                            <div class="dot"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="charge charge-2"></div>
                    <div class="li-content">
                        <div>MACD</div>
                        <div class="cube">
                            <div class="dot"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="charge charge-3"></div>
                    <div class="li-content">
                        <div>Moving Averages</div>
                        <div class="cube">
                            <div class="dot"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="charge charge-4"></div>
                    <div class="li-content">
                        <div >Bollinger Bands</div>
                        <div class="cube">
                            <div class="dot"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="charge charge-5"></div>
                    <div class="li-content">
                        <div>Stochastic oscillator</div>
                        <div class="cube">
                            <div class="dot"></div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="gazes-information">
            </div>
        </div>
        <div class="targeting dimension-3d">
            <div class="target x-axis"></div>
            <div class="glow"></div>
            <div class="target y-axis">
                <div class="target-scale target-scale-1"></div>
                <div class="target-scale target-scale-2"></div>
                <div class="target-scale target-scale-3"></div>
                <div class="target-scale target-scale-4"></div>
                <div class="target-scale target-scale-5"></div>
                <div class="target-scale target-scale-6"></div>
                <div class="target-scale target-scale-7"></div>
                <div class="target-scale target-scale-8"></div>
            </div>
            <div class="aimer"></div>
        </div>
        <div class="right-part dimension-3d">
            <ul class="pilote-info">
                <li><span>PILOTE: THEDAMICRAZY</span></li>
                <li><span>SIZE: 6 FT</span></li>
                <li><span>TEAM: SECTION 501</span></li>
                <li><span>RANK: OFFICIER</span></li>
            </ul>
            <div class="angle">
                <div class="angle-meter">
                    <div class="triangle"></div>
                    <span>0°</span>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>

                <div class="angle-inner-pattern">
                    <div class="center-rect">
                        <div class="small-rect right-top-rect"></div>
                        <div class="small-rect right-bottom-rect"></div>
                        <div class="small-rect left-top-rect"></div>
                        <div class="small-rect left-bottom-rect"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>


        </section>
      </React.Fragment>
    );
  }
}


export default Aitrading;
