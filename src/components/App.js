import React from "react";
import StationSearchbar from "./StationSearchbar";
import PopTrackerNavBar from "./PopTrackerNavBar";
import Linechooser from "./Linechooser";

import "../css/App.css";
import backgroundImg from "../images/backgroundSubway.jpeg";

function App() {
  return (
    <div className="App">
      <img src={backgroundImg} alt="background" className="backgroundImg" />
      <PopTrackerNavBar />
      <h4 className="number">1) Choose your Station</h4>
      <StationSearchbar />
      <hr />
      <h4 className="number">2) Choose a Line</h4>
      <Linechooser />
    </div>
  );
}

export default App;
