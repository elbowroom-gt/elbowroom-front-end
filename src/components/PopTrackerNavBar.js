import React, { Component } from "react";
import "../css/PopTrackerNavBar.css";

class PopTrackerNavBar extends Component {
  render() {
    return (
      <nav>
        <img src="../images/logo.svg" alt="logo" />
        <h1 className="name">
          p<span className="o">o</span>pTracker
        </h1>
      </nav>
    );
  }
}

export default PopTrackerNavBar;
