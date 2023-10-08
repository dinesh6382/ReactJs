import React, { Component } from "react";
import "./sectionPage.css";
import { Button } from "primereact/button";

class SectionPage extends Component {
  render() {
    console.log("sectionpage");
    return (
      <>
        <div className="main-section">
          <div className="left-section">
            <div className="section1"></div>
            <div className="section2"></div>
            <div className="section3"></div>
          </div>
          <div className="right-section">
            <label className="head-label">
              YOUR FAVORITE FOOD
              <br />
              MAKE IT GOOD
            </label>
            <br />
            <label className="sub-heading">
              Create or View the Recipes below
            </label>
            {/* <button className="create-btn" type="button" ><label>Create</label></button> */}
            <div className="action-div" >
              <Button className="create-btn action-btn" label="Create" />
              <Button className="view-btn action-btn" label="View" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SectionPage;
