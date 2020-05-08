import React from "react";
import StationSearchbar from "./StationSearchbar";
import PopTrackerNavBar from "./PopTrackerNavBar";
import DirectionSelection from "./DirectionSelection";
import Line from "./Line";
import TrainView from "./TrainView";
import "../css/App.css";
import backgroundImg from "../images/backgroundSubway.jpeg";
import TipButton from "./Tips";
import "../css/tips.css";


function App() {

  
  return (
    <div className="App">
      {/* <img src={backgroundImg} alt="background" className="backgroundImg" /> */}
      <PopTrackerNavBar />
      <h4 className="number">1) Choose a Line. <TipButton message= {lineTip}/></h4> 
      <Line />
      <hr />
      <h4 className="number">2) Choose your Station. <TipButton message={stationTip}/></h4>
      <StationSearchbar />
      <hr />
      <h4 className="number">3) Choose your direction of travel. <TipButton message={directionTip}/></h4>
      <DirectionSelection />
      <hr />
      <hr />
      <h4 className="number">4) Upcoming Train Densities. <TipButton message={trainTip}/></h4>
      <TrainView />
      
    </div>
  );
  
}

const lineTip = "Click or tap on the line you want to travel on"
const stationTip = "Click or select the train station you are on. " +
                "Type the station to narrow down the station list."
const directionTip = "Click to select wether you are traveling Uptown or Downtown."
const trainTip = "Here are the upcoming trains for the line and station you previously selected.\n \n"
                    + "Each train car is represented by a square, and the color of each"
                    + " square indicates the population density in that train car"
export default App;
