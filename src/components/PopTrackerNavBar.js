import React from "react";
import "../css/PopTrackerNavBar.css";
import SystemSelector from "./SystemSelector.js";
import logo from "../images/elbowroomIcon3.png"



const PopTrackerNavBar = function() {
  return (
    <div className="navBar">
      <img src={ logo } alt="logo" className="logo" />
      <h1 className="name">elbowroom</h1>
      <SystemSelector />
    </div>
  );
}

export default PopTrackerNavBar;
