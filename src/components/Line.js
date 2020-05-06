import Papa from 'papaparse';

import { lines } from "./MARTALines";
import React, { Component } from "react";
import Autosuggest from "react-autosuggest";


function Button (props) {
    return (<button
        key={props.name}
        className="lineBubble"
        style={{ "background-color":  props.color,
                'opacity':props.transparency}}
        onClick = {() => props.onClick(props.name)}
       
      ></button>)
    }


 

class Line extends Component{
   constructor(){
       super()
       this.state = {
           currentSelection: null,
           lines: {lines}
       }

    }

       
   
    
    handleClick(name){
        //work on this. CSS for this is in StationSearch.css
        this.setState({currentSelection: name})
        
        return;
    }

    render() {
        let arr = []
        lines.forEach(element => arr.push(<Button name = {element.name}
            color = {element.color}
            onClick = {(name) => this.handleClick(name)}
            transparency = {(this.state.currentSelection == null || this.state.currentSelection == element.name ? 1 : .5) } />))
        
         
    return (arr);
       
    }


}

export default Line;

