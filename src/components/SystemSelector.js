import React from "react";
import "../css/SystemSelector.css";
import { useDispatch, useSelector } from 'react-redux';
import { chooseSystem, selectSystem } from '../app/appstateSlice';
import SelectSearch from 'react-select-search';

const SystemSelector = function() {
    const dispatch = useDispatch();
    const system = useSelector(selectSystem);

    const systems = [
        { name: "MTA", value: "MTA" },
        { name: "MARTA", value: "MARTA" },
      ];

    return (

        <div className="select">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <SelectSearch
                id="selector"
                className="systemSelector"
                options={ systems }  
                onChange={(value) => dispatch(chooseSystem(value))} 
                placeholder={ system }
                />
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>
        );

} 

export default SystemSelector;