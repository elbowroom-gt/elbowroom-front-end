import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import "../css/DirectionSelection.css";
import { lines } from "./MARTALines.js";
import { useSelector, useDispatch } from 'react-redux';
import { chooseDirection, selectDirection, selectLine } from '../app/appstateSlice';

const DirectionSelection = function() {

  const dispatch = useDispatch();
  const direction = useSelector(selectDirection);
  const currLine = useSelector(selectLine);

  let button1 = "";
  let button2 = "";

  lines.forEach(element => {
    if (element["name"] === currLine) {
      button1 = element["direction"][0]
      button2 = element["direction"][1]
    }
  })

  return (
    <ButtonGroup className="buttonGroup">
      <Button className = {direction === 1 ? "selectedButton" : "noSelectedButton"} onClick={() => dispatch(chooseDirection(1))}>{ button1 }</Button>
      <div className="horizontalDivider"/>
      <Button className = {direction === -1 ? "selectedButton" : "noSelectedButton"} onClick={() => dispatch(chooseDirection(-1))}>{ button2 }</Button>
    </ButtonGroup>
  );
}

export default DirectionSelection;