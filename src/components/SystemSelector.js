import React from "react";
import "../css/SystemSelector.css";
import { useDispatch, useSelector } from 'react-redux';
import { chooseSystem, selectSystem } from '../app/appstateSlice';
import Select from 'react-select';

const SystemSelector = function() {

    const dispatch = useDispatch();
    const system = useSelector(selectSystem);

    const systems = [
        { label: "MTA", value: 1 },
        { label: "MARTA", value: 2 },
      ];

    return (

        <div className="select">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Select 
                options={ systems }  
                onChange={(value) => dispatch(chooseSystem(value))} 
                placeholder={"System"}
                />
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>
        );

}
export default SystemSelector;