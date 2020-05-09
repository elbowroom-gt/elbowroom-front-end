import React, { Component } from "react";
import "../css/TrainCarView.css";
import { gradientHelpers } from "./HelperFunctions";

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
            const gradient = gradientHelpers.gradient1;
            const color = gradientHelpers.colorGradient(e/100, gradient.color1, gradient.color2, gradient.color3);
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
