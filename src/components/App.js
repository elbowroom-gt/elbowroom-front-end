import React from "react";
import StationSearchbar from "./StationSearchbar";
import PopTrackerNavBar from "./PopTrackerNavBar";
import DirectionSelection from "./DirectionSelection";
import Line from "./Line";
import TrainView from "./TrainView";
import "../css/App.css";
import backgroundImg from "../images/backgroundSubway.jpeg";

function App() {
  return (
    <div className="App">
      {/* <img src={backgroundImg} alt="background" className="backgroundImg" /> */}
      <PopTrackerNavBar />
      <h4 className="number">1) Choose a Line.</h4>
      <Line />
      <hr />
      <h4 className="number">2) Choose your Station.</h4>
      <StationSearchbar />
      <hr />
      <h4 className="number">3) Choose your direction of travel.</h4>
      <DirectionSelection />
      <hr />
      <hr />
      <h4 className="number">4) Upcoming Train Densities.</h4>
      <TrainView />
      
    </div>
  );
}

export default App;
