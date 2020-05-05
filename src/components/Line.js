import Papa from 'papaparse';

import { lines } from "./MARTALines";
import React, { Component } from "react";
import Autosuggest from "react-autosuggest";


function Button (props) {
    return (<button
        key={props.name}
        className="lineBubble"
        style={{ "background-color":  props.color }}
        onClick = {() => props.onClick(props.name)}
      ></button>)
    }


 

class Line extends Component{
    
    
    handleClick(name){
        //work on this. CSS for this is in StationSearch.css
        return;
    }

    render() {
        let arr = []
        lines.forEach(element => arr.push(<Button name = {element.name}
            color = {element.color}
            onClick = {(name) => this.handleClick(name)} />))
         
    return (arr);
       
    }


}

export default Line;

