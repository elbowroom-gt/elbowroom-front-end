import { MARTALines } from "./MARTALines";
import { MTALines } from "./MTALines";
import { lines } from "./MARTALines";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { chooseLine, selectLine, selectSystem } from '../app/appstateSlice';

import {Button} from 'react-bootstrap';

const Line = function() {
    const dispatch = useDispatch();
    const current_line = useSelector(selectLine);
    const system = useSelector(selectSystem);

    let arr = []

    let lines = [];
    if (system === "MTA") {
      lines = MTALines;
    } else {
      lines = MARTALines;
    }
    
    lines.forEach(element => arr.push(
        <Button 
            type="primary" 
            onClick = {() => dispatch(chooseLine(element.name))} 
            style={{ "background-color":  element.color, 
                    "opacity": (current_line !== null && current_line !== element.name) ? 0.5 : 1,
                    "borderRadius": "50%",
                    "color": "white",
                    "font-family": "'Helvetica', 'Arial', sans-serif",
                    "font-size": "125%"}}>
            {element.displayName}
        </Button>
    ))

    return (<section className= 'container'>{arr}</section>)
}

export default Line;

