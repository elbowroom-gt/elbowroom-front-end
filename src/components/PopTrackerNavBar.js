import React from "react";
import "../css/PopTrackerNavBar.css";
import SystemSelector from "./SystemSelector.js";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/Navdropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const PopTrackerNavBar = function() {
  return (
    // <Navbar bg="light" expand="lg" className="navBar">
    //   <Navbar.Brand>Elbow Room</Navbar.Brand>
    //   <NavDropdown drop="left" className="dropdown" id="basic-navbar-nav">
    //     <SystemSelector /> 
    //   </NavDropdown>     
		// </Navbar>
    <div className="navBar">
      Elbow Room
      <SystemSelector />
    </div>
  );
}

export default PopTrackerNavBar;
