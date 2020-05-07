import React from "react";
import "../css/SystemSelector.css";
import { Button } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { chooseSystem } from '../app/appstateSlice';


const SystemSelector = function() {

    const dispatch = useDispatch();

    return (
        <div class="btn-group-vertical" className="dropdownItems">
            <Button variant = "light"
            onClick={() => dispatch(chooseSystem("MTA"))} >MTA</Button>
            <div> </div>
            <Button variant = "light"
            onClick={() => dispatch(chooseSystem("MARTA"))}>MARTA</Button>
        </div> 
    );

}
export default SystemSelector;