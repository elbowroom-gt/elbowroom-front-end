import { createSlice } from '@reduxjs/toolkit';

export const transitSlice = createSlice({
    name: "transit",
    initialState: {
        selectedSystem: "MARTA",
        selectedLines: null,
        selectedStation: null,
        selectedDirection: 0,
    },
    reducers: {
        chooseSystem: (state, action) => {
            state.selectedSystem = action.payload;
            state.selectedLines = null;
            state.selectedStation = null;
            state.selectedDirection = 0;
        },
        chooseLine: (state, action) => {
            state.selectedLines = action.payload;
            state.selectedStation = null;
            state.selectedDirection = 0;
        },
        chooseStation: (state, action) => {
            state.selectedStation = action.payload;
            state.selectedDirection = 0;
        },
        chooseDirection: (state, action) => {
            state.selectedDirection = 0;
            state.selectedDirection += action.payload;
        }
    }
});


export const {chooseSystem, chooseLine, chooseStation, chooseDirection} = transitSlice.actions;

//These are selectors, they allow us to easily select a value from the state
export const selectSystem = state => state.transit.selectedSystem;
export const selectLine = state => state.transit.selectedLines;
export const selectStation = state => state.transit.selectedStation;
export const selectDirection = state => state.transit.selectedDirection;



export default transitSlice.reducer;