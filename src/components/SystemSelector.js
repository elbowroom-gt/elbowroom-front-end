import React from "react";
import "../css/SystemSelector.css";
import { useDispatch, useSelector } from 'react-redux';
import { chooseSystem, selectSystem } from '../app/appstateSlice';
import Select from 'react-select';

const SystemSelector = function() {
    const dispatch = useDispatch();
    const system = useSelector(selectSystem);

    const systems = [
        { label: "NYC", value: "MTA" },
        { label: "ATLANTA", value: "MARTA" },
      ];
    
    let city = systems.find(system => system.value === system);
    city = city === undefined ? "ATLANTA" : city;

    return (
        <div className="select">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Select
                className="systemSelector"
                options={ systems }  
                onChange={(value) => dispatch(chooseSystem(value.value))} 
                placeholder={ city }
                />
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>
        );

} 

export default SystemSelector;