import React from "react";
import "../css/PopTrackerNavBar.css";
import SystemSelector from "./SystemSelector.js";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/Navdropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
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
