import React from "react";
import TrainCarView from "./TrainCarView";
import "../css/TrainView.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectDirection, 
         selectLine, 
         selectStation, 
         selectColorBlindMode, 
         toggleColorblindMode } from '../app/appstateSlice';
import { gradientHelpers } from "./HelperFunctions";

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

  const colorblind = useSelector(selectColorBlindMode);
  const dispatch = useDispatch();
  
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
      <div>
        <button id="toggleColorblind" onClick={() => dispatch(toggleColorblindMode())}>
          <div className="legend">
            {[0, 25, 50, 75, 100].map((e) => {
              const gradient = gradientHelpers.gradients[colorblind];
              const background_color = gradientHelpers.colorGradient(e/100, gradient.color1, gradient.color2, gradient.color3);
              const text_color = e < 30 && colorblind ? "black" : "white";

              return (
                <div className="legendItem" style={{ backgroundColor: background_color, color: e % 50 === 0 ? text_color : background_color }}>
                  {e + "%"}
                </div>
              );
            })}
          </div>
        </button>
      </div>
      <div className="trainViewMain">
        {trains.map((e) => {
          e.colorblind = colorblind;
          return <TrainCarView {...e} />;
        })}
      </div>
    </div>
  );
}

export default TrainView;
