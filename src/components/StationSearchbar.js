import React from "react";
import "../css/StationSearchbar.css";
import SelectSearch from 'react-select-search';
import { useSelector, useDispatch } from 'react-redux';
import {
  chooseStation,
  selectLine,
} from "../app/appstateSlice";
// Imagine you have a list of stations that you'd like to autosuggest.
import { stations } from "./MARTAStations";

const StationSearch = function() {
  const current_line = useSelector(selectLine);
  const dispatch = useDispatch();
  return <SelectSearch 
          options={stations.filter((station) => station.lines.includes(current_line))}
          placeholder={"Select a station"}
          search
          onChange={(value) => dispatch(chooseStation(value))}>
        </SelectSearch>
}

export default StationSearch;