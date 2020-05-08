import React from "react";
import "../css/PopTrackerNavBar.css";
import SystemSelector from "./SystemSelector.js";

const PopTrackerNavBar = function () {
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
};

export default PopTrackerNavBar;
