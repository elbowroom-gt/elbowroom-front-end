import React, { Component } from "react";
import TrainCarView from "./TrainCarView";
import "../css/TrainView.css";

const trains = [
  {
    timeTillArrival: 4,
    cars: [34, 12, 46, 84, 24],
  },
  {
    timeTillArrival: 14,
    cars: [63, 42, 6],
  },
  {
    timeTillArrival: 24,
    cars: [53, 26, 62, 16, 75],
  },
  {
    timeTillArrival: 30,
    cars: [1, 26, 30, 16, 10],
  },
  {
    timeTillArrival: 45,
    cars: [100, 10],
  },
  {
    timeTillArrival: 55,
    cars: [20, 26, 50, 16, 17, 68, 90],
  },
];

class TrainView extends Component {
  render() {
    return (
      <div className="trainViewMain">
        {trains.map((e) => {
          return <TrainCarView {...e} />;
        })}
      </div>
    );
  }
}

export default TrainView;
