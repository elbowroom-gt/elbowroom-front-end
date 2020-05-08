import React from "react";
import StationSearchbar from "./StationSearchbar";
import PopTrackerNavBar from "./PopTrackerNavBar";
import DirectionSelection from "./DirectionSelection";
import Line from "./Line";
import TrainView from "./TrainView";
import "../css/App.css";
import TipButton from "./Tips";
import "../css/tips.css";

function App() {
  return (
    <div className="App">
      {/* <img src={backgroundImg} alt="background" className="backgroundImg" /> */}
      <PopTrackerNavBar />
      <h4 className="number">
        1) Choose a Line. <TipButton message="HI" />
      </h4>
      <Line />
      <hr />
      <h4 className="number">
        2) Choose your Station. <TipButton message="Add some stuff" />
      </h4>
      <StationSearchbar />
      <hr />
      <h4 className="number">
        3) Choose your direction of travel.{" "}
        <TipButton message="Carole Baskin did it" />
      </h4>
      <DirectionSelection />
      <hr />
      <hr />
      <h4 className="number">
        4) Upcoming Train Densities.{" "}
        <TipButton message="Jeffrey Eipstein was murdered" />
      </h4>
      <TrainView />
    </div>
  );
}

export default App;
