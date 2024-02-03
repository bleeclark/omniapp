import React from "react";
import img from "Images/manchester.png";

class Manchesterunited extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div>


        <img src={img} /><br /><br />

        <div className="crt">Manchester United </div>
        <br />
        <span className="crt">  ═══════[†]═══════  </span> <br />

<div>
  <container>


    <div className="">



      <section className="crt">
        <h2>Manchester United Login Credentials</h2>
        <form className="add-tasks--container">

          <div className="add-task add-task__splash" id="MANUTD_USERNAME">
            <h4>MANUTD_USERNAME</h4>
            <input type="text" placeholder="MANUTD_USERNAME"/>
          </div>

          <div id="add--flex">
            <div className="input--sect">
              <div className="add-task" id="MANUTD_PASSWORD">
                <h4>MANUTD_PASSWORD</h4>
                <input type="text" placeholder="MANUTD_PASSWORD"/>
              </div>

            </div>
          </div>

          <button className="add-task--button">Save Login</button>

        </form>
      </section>



      <section id="proxies" className="tab-content">
        <h2>Thread Management</h2>
        <div className="proxies--container">
          <input type="text" placeholder="PROXY_URL"/>
          <input type="text" placeholder="PROXY_USERNAME"/>
          <input type="text" placeholder="PROXY_PASSWORD"/>
          <div className="proxies-btn--container">
            <button className="save-btn">Save Proxy</button>
            <button className="delete-btn">Delete All</button>
          </div>
        </div>
      </section>


      <section id="profile" className="tab-content">
        <h2>Profile</h2>

        <div className="profile--container">

          <form id="profile-info" className="profile-info--container">
            <div className="shipping--container">
              <h4>Login Credentials</h4>


              <div id="email" className="profile--cat">
                <h5>Username</h5>
                <input type="text" name="Email" />
              </div>

              <div id="telephone" className="profile--cat">
                <h5>Password</h5>
                <input type="text" name="Telephone" />
              </div>


            <div className="card--container">
              <h4>Card Information</h4>
              <div id="name" className="card--cat card--cat__name">
                <div id="first">
                  <h5>First Name</h5>
                  <input type="text" name="FirstName" />
                </div>
                <div id="last">
                  <h5>Last Name</h5>
                  <input type="text" name="LastName" />
                </div>
              </div>


              <div id="address" className="profile--cat">
                <h5>Address</h5>
                <input type="text" name="Address" />
              </div>

              <div id="address2" className="profile--cat">
                <h5>Address Line 2</h5>
                <input type="text" name="Address" />
              </div>

              <div id="city" className="profile--cat">
                <h5>City</h5>
                <input type="text" name="City" />
              </div>

              <div id="state-zip" className="profile--cat profile--cat__zip">
                <div id="state">
                  <h5>State</h5>
<input type="text" name="State" />
                </div>
                <div id="zip">
                  <h5>Zip Code</h5>
                  <input type="text" name="ZipCode" />
                </div>
              </div>
            </div>

              <div id="email" className="card--cat">
                <h5>Card Number</h5>
                <input type="text" name="Email" />
              </div>

              <div id="state-zip" className="card--cat card--cat__zip">
                <div id="Month">
                  <h5>Month</h5>
<input type="text" name="Month" />
                </div>
                <div id="state">
                  <h5>Year</h5>
<input type="text" name="Year" />
                </div>
              </div>

              <div id="profile-name">
                <h5>Profile Name</h5>
                <input type="text" name="ProfileName" />
                <button className="profile--button__save" name="button">Save</button>
              </div>
            </div>
          </form>

          <div className="saved--profiles--container">
            <h4>Saved Profiles</h4>

            <div className="saved--profile">
              <p>Test Profile 1</p>
              <div className="edit--buttons">
                <button>
                  <svg width='26' height='20' fill-rule="evenodd" viewBox="0 0 29 29">
                    <path d="M20.297 2.932l2.9-2.9 5.806 5.805-2.9 2.9zM3.867 19.385l5.8 5.807 14.5-14.517-5.8-5.806-14.5 14.515zm5.8 3.07L6.6 19.384 18.367 7.607l3.066 3.068-11.766 11.78zM0 29.062l4.833-1.936-2.9-2.903z" />
                  </svg>
                </button>
                <button>
                  <svg width='14' height='23' viewBox='0 0 16 24' fill-rule='evenodd'>
                    <path d='M4 0h8v2H4zM0 3v4h1v17h14V7h1V3H0zm13 18H3V8h10v13z'></path>
                    <path d='M5 10h2v9H5zm4 0h2v9H9z'></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="saved--profile">
              <p>Test Profile 2</p>
              <div className="edit--buttons">
                <button>
                  <svg width='26' height='20' fill-rule="evenodd" viewBox="0 0 29 29">
                    <path d="M20.297 2.932l2.9-2.9 5.806 5.805-2.9 2.9zM3.867 19.385l5.8 5.807 14.5-14.517-5.8-5.806-14.5 14.515zm5.8 3.07L6.6 19.384 18.367 7.607l3.066 3.068-11.766 11.78zM0 29.062l4.833-1.936-2.9-2.903z" />
                  </svg>
                </button>
                <button>
                  <svg width='14' height='23' viewBox='0 0 16 24' fill-rule='evenodd'>
                    <path d='M4 0h8v2H4zM0 3v4h1v17h14V7h1V3H0zm13 18H3V8h10v13z'></path>
                    <path d='M5 10h2v9H5zm4 0h2v9H9z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="configuration" className="tab-content">
        <h2>Notifications</h2>
        <div className="configuration--container">
          <div className="discord--settings">

            <div className="discord--toggles">
              <div id="carts">
                <label className="switch units">
                  <input id="switch" type="checkbox" value="" />
                  <div className="slider round"></div>
                </label>
                <span className="chk-text">Send Carts to Discord</span>

              </div>
                <div id="carts">
                <label className="switch units">
                  <input id="switch" type="checkbox" value="" />
                  <div className="slider round"></div>
                </label>
                <span className="chk-text">Send Carts to Slack</span>
                
              </div>
                <div id="carts">
                <label className="switch units">
                  <input id="switch" type="checkbox" value="" />
                  <div className="slider round"></div>
                </label>
                <span className="chk-text">Send Carts to Telegram</span>
                
              </div>
              <div id="bypass">
                <label className="switch units">
                  <input id="switch" type="checkbox" value="" />
                  <div className="slider round"></div>
                </label>
                <span className="chk-text">Splash Bypass</span>
              </div>
            </div>

          </div>
          <div className="conf--settings">
            <button>Edit Host File</button>
            <button>Install Modules</button>
            <button>Update</button>
          </div>
        </div>
      </section>


    </div>
  </container>



  <container className="control-container">
    <div id="checkouts">Success: 0 </div>
    <div className="controls">
      <svg width='32' height='32' viewBox='0 0 24 24' fill-rule='evenodd'>
        <path d='M8 17l9-5-9-5z'></path>
        <path d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z'></path>
      </svg>
      <svg width='32' height='32' viewBox='0 0 24 24' fill-rule='evenodd'>
        <path d='M8 8h8v8H8z'></path>
        <path d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z'></path>
      </svg>
      <svg width='23' height='32' viewBox='0 0 16 24' fill-rule='evenodd'>
        <path d='M4 0h8v2H4zM0 3v4h1v17h14V7h1V3H0zm13 18H3V8h10v13z'></path>
        <path d='M5 10h2v9H5zm4 0h2v9H9z'></path>
      </svg>
    </div>
    <div id="version">v 1.2.0</div>
  </container>

  

</div>

        </div>
      </section>



      </React.Fragment>
    );
  }
}

export default Manchesterunited;
