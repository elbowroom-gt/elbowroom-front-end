import React from "react";
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import "../css/DirectionSelection.css";
import { MARTALines } from "./MARTALines.js";
import { MTALines } from "./MTALines.js";
import { useSelector, useDispatch } from 'react-redux';
import { chooseDirection, selectSystem, selectDirection, selectLine, selectStation } from '../app/appstateSlice';

const DirectionSelection = function() {

  const dispatch = useDispatch();
  const direction = useSelector(selectDirection);
  const system = useSelector(selectSystem);
  const currLine = useSelector(selectLine);
  const currStation = useSelector(selectStation);

  let lines = [];
  if (system === "MTA") {
    lines = MTALines;
  } else {
    lines = MARTALines;
  }

  let button1 = "Direction";
  let button2 = "Direction";

  lines.forEach(element => {
    if (element["name"] === currLine) {
      button1 = element["direction"][0]
      button2 = element["direction"][1]
    }
  })

  return ( 
    <div style={{"opacity": currLine === null || currStation === null ? ".25" : "1"}} >
      <ButtonGroup className="buttonGroup">
        <Button className = {direction === 1 ? "selectedButton" : "noSelectedButton"} onClick={() => dispatch(chooseDirection(1))} disabled={currLine === null}>{ button1 }</Button>
        <div className="horizontalDivider"/>
        <Button className = {direction === -1 ? "selectedButton" : "noSelectedButton"} onClick={() => dispatch(chooseDirection(-1))} disabled={currLine === null}>{ button2 }</Button>
      </ButtonGroup>
    </div>
  );
}

export default DirectionSelection;