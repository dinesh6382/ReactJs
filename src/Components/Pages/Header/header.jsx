import React, { Component } from "react";
import "./header.css";
import Icon2 from "../../../Assets/Imgs/Vector.svg";
import Icon3 from "../../../Assets/Imgs/accntsvg 1.svg";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="logo-div">
            <img src={Icon2} alt="logo" className="logo-icon" />
            <label className="main-title" > OWN RECIPE </label>
          </div>
          <div className="account-div">
            <b className="account-name" >John</b>
            <img src={Icon3} alt="logo" className="account-icon" />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
