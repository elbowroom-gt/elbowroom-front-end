import React from "react";
import "../css/StationSearchbar.css";
import SelectSearch from 'react-select-search';
import { useSelector, useDispatch } from 'react-redux';
import { chooseStation, selectSystem, selectLine } from "../app/appstateSlice";
// Imagine you have a list of stations that you'd like to autosuggest.
import { MARTAStations } from "./MARTAStations";
import { MTAStations } from "./MTAStations";
import { MARTALines } from "./MARTALines";
import { MTALines } from "./MTALines";


function renderStationMARTA(props, option, snapshot, className) {
  let lines = [];

  MARTALines.forEach(element => {
    if (option.lines.includes(element.name)) {
      lines.push(<div style={{"background-color": element.color,
                              "borderRadius": "50%",
                              "width": "20px",
                              "height": "20px",
                              "padding": "0.1em",
                              "float": "right"}}>
        </div>);
    }
  });

  return <button {...props} className={className} type="button" style={{"width": "100%"}}>
          {option.name}{lines}
        </button>
}

function renderStationMTA(props, option, snapshot, className) {
  let lines = [];

  MTALines.forEach(element => {
    if (option.lines.includes(element.name)) {
      lines.push(<div style={{"background-color": element.color,
                              "borderRadius": "50%",
                              "color": "white",
                              "font-family": "'Helvetica', 'Arial', sans-serif",
                              "font-size": "90%",
                              "textAlign": "center",
                              "verticalAlign": "middle",
                              "width": "20px",
                              "height": "20px",
                              "padding": "0.1em",
                              "float": "right"}}>
        {element.name}
        </div>);
    }
  });

  return <button {...props} className={className} type="button" style={{"width": "100%"}}>
          {option.name}{lines}
        </button>
}

const StationSearch = function() {
  const current_line = useSelector(selectLine);
  const system = useSelector(selectSystem);
  const dispatch = useDispatch();

  let stations = [];

  if (system === "MTA") {
    MTAStations.data.forEach(element => {
      stations.push({
        name: element[10],
        value: element[9],
        lines: element[12].split("-").map(x => x.substring(0,1))
      })
    });
  } else {
    stations = MARTAStations;
  }

  return <SelectSearch 
          options={stations.filter((station) => station.lines.includes(current_line))}
          placeholder={"Select a station"}
          search
          onChange={(value) => dispatch(chooseStation(value))}
          renderOption={system === "MTA" ? renderStationMTA : renderStationMARTA}>
        </SelectSearch>
}

export default StationSearch;