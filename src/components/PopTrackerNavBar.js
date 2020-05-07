import React from "react";
import "../css/PopTrackerNavBar.css";
import SystemSelector from "./SystemSelector.js";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


const PopTrackerNavBar = function() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Navbar.Brand>Elbow Room</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <SystemSelector /> 
      </Navbar.Collapse>
		</Navbar>
  );
}

export default PopTrackerNavBar;
