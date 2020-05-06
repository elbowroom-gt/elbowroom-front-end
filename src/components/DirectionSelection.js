import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import "../css/DirectionSelection.css";

import { useSelector, useDispatch } from 'react-redux';
import {
  chooseDirection,
  selectDirection
} from '../app/appstateSlice';

const DirectionSelection = function() {
  const dispatch = useDispatch();
  const direction = useSelector(selectDirection);
  
  return (
    <ButtonGroup className="buttonGroup">
      <Button className = {direction === 1 ? "selectedButton" : "noSelectedButton"} onClick={() => dispatch(chooseDirection(1))}>Uptown</Button>
      <div className="horizontalDivider"/>
      <Button className = {direction === -1 ? "selectedButton" : "noSelectedButton"} onClick={() => dispatch(chooseDirection(-1))}>Downtown</Button>
    </ButtonGroup>
  );
}

export default DirectionSelection;