import Papa from 'papaparse';

import { lines } from "./MARTALines";
import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import {
  chooseLine,
  selectLine
} from '../app/appstateSlice';

import {Button} from 'react-bootstrap';

const Line = function() {
    const dispatch = useDispatch();
    const current_line = useSelector(selectLine);

    let arr = []

    lines.forEach(element => arr.push(
        <Button 
            type="primary" 
            shape="circle" 
            onClick = {() => dispatch(chooseLine(element.name))} 
            style={{ "background-color":  element.color, 
                    "opacity": (current_line !== null && current_line !== element.name) ? 0.5 : 1}}>
            {element.name}
        </Button>
    ))

    return (<section className= 'container'>{arr}</section>)
}

export default Line;

