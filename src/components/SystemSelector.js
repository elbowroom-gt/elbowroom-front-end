import React from "react";
import "../css/SystemSelector.css";
import { Button } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { chooseSystem } from '../app/appstateSlice';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const SystemSelector = function() {

    const dispatch = useDispatch();


    return (
        <div class="btn-group-vertical" className="dropdown">
            <Button variant = "light"
            onClick={() => dispatch(chooseSystem("MTA"))} >MTA</Button>
            <div> </div>
            <Button variant = "light"
            onClick={() => dispatch(chooseSystem("MARTA"))}>MARTA</Button>
        </div> 
        // <div className="dropdown">
        //     <Dropdown.Toggle variant="success" id="dropdown-basic">Select System</Dropdown.Toggle>
        //     <Dropdown.Menu>
        //         <Dropdown.Item >MTA</Dropdown.Item>
        //         <Dropdown.Item >MARTA</Dropdown.Item>
        //     </Dropdown.Menu>
        // </div>
    );

}
export default SystemSelector;