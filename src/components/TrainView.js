import React, { Component } from "react";
import TrainCarView from "./TrainCarView";
import "../css/TrainView.css";

let trains = [
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

// trains = [];

class TrainView extends Component {
  render() {
    return (
      <div>
        <div className="legend">
          {[0, 20, 40, 60, 80, 100].map((e) => {
            const color = `rgb(${89 * ((100 - e) / 100) + 175 * (e / 100)},${
              183 * ((100 - e) / 100) + 25 * (e / 100)
            },${58 * ((100 - e) / 100) + 22 * (e / 100)})`;
            return (
              <div className="legendItem" style={{ backgroundColor: color }}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="trainViewMain">
          {trains.map((e) => {
            return <TrainCarView {...e} />;
          })}
        </div>
      </div>
    );
  }
}

export default TrainView;
