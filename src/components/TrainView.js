import React from "react";
import TrainCarView from "./TrainCarView";
import "../css/TrainView.css";
import { useSelector } from "react-redux";
import {
  selectDirection,
  selectLine,
  selectStation,
} from "../app/appstateSlice";

let trains = [
  {
    timeTillArrival: 4,
    cars: [34, 12, 46, 84, 24, 77],
  },
  {
    timeTillArrival: 14,
    cars: [63, 42, 6, 80, 87, 55],
  },
  {
    timeTillArrival: 24,
    cars: [53, 26, 62, 16, 75, 99],
  },
  {
    timeTillArrival: 30,
    cars: [1, 26, 30, 16, 10, 32],
  },
  {
    timeTillArrival: 45,
    cars: [100, 10, 77, 38, 92, 45],
  },
  {
    timeTillArrival: 55,
    cars: [60, 26, 50, 16, 17, 90],
  },
];

function TrainView() {
  const current_line = useSelector(selectLine);
  const current_station = useSelector(selectStation);
  const current_direction = useSelector(selectDirection);

  return (
    <div
      style={{
        opacity:
          current_line === null ||
          current_station === null ||
          current_direction === 0
            ? "0"
            : "1",
      }}
    >
      {/* <p className="summary">Travelling (West) on the (Green) line from (Midtown) station.<br/></p> */}

      <p className="legendTitle">Train car density scale:</p>
      <div className="legend">
        {/* dark blue = (15, 36, 70) */}
        {[0, 20, 40, 60, 80, 100].map((e) => {
          const color = `rgb(${255 * ((100 - e) / 100) + 15 * (e / 100)},${
            255 * ((100 - e) / 100) + 36 * (e / 100)
          },${255 * ((100 - e) / 100) + 70 * (e / 100)})`;
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

export default TrainView;
