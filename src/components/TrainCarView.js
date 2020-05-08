import React, { Component } from "react";
import "../css/TrainCarView.css";

class TrainCarView extends Component {
  render() {
    return (
      <div className="trainCarView">
        <p>
          <b>{this.props.timeTillArrival}</b> minutes
        </p>
        <div className="train">
          {this.props.cars.map((e) => {
            // white = (255, 255, 255)
            // dark blue = (15, 36, 70)
            const color = `rgb(${255 * ((100 - e) / 100) + 15 * (e / 100)},${
              255 * ((100 - e) / 100) + 36 * (e / 100)
            },${255 * ((100 - e) / 100) + 70 * (e / 100)})`;
            return (
              <div className="car" style={{ backgroundColor: color }}></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TrainCarView;
