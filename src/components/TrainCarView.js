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
          &lt;
          {this.props.cars.map((e) => {
            // Green = (89, 183, 58)
            // Red = (175, 25, 22)
            const color = `rgb(${89 * ((100 - e) / 100) + 175 * (e / 100)},${
              183 * ((100 - e) / 100) + 25 * (e / 100)
            },${58 * ((100 - e) / 100) + 22 * (e / 100)})`;
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
