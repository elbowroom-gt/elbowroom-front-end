import React from "react";
import "../css/StationSearchbar.css";
import SelectSearch from 'react-select-search';
import { useSelector, useDispatch } from 'react-redux';
import { chooseStation, selectSystem, selectLine } from "../app/appstateSlice";
// Imagine you have a list of stations that you'd like to autosuggest.
import { MARTAStations } from "./MARTAStations";
import { MTAStations } from "./MTAStations";

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
          onChange={(value) => dispatch(chooseStation(value))}>
        </SelectSearch>
}

export default StationSearch;