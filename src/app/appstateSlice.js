import { createSlice } from '@reduxjs/toolkit';

export const appstateSlice = createSlice({
    name: "appstate",
    initialState: {
        selectedLines: new Set(),
        selectedStation: null,
        selectedDirection: null,
    },
    reducers: {
        chooseLine: (state, action) => {
            // if (state.selectedLines.has(action.payload)) {
            //     state.selectedLines.remove(action.payload);
            // } else {
            //     state.selectedLines.add(action.payload);
            // }
            state.selectedLines = action.payload;
            state.selectedStation = null;
            state.selectedDirection = null;
        },
        chooseStation: (state, action) => {
            state.selectedStation = action.payload;
            state.selectedDirection = null;
        },
        chooseDirection: (state, action) => {
            state.selectedDirection = action.payload;
        }
    }
});


export const {chooseLine, chooseStation, chooseDirection} = appstateSlice.actions;

//These are selectors, they allow us to easily select a value from the state
export const selectLine = state => state.appstate.selectedLines;
export const selectStation = state => state.appstate.selectedStation;
export const selectDirection = state => state.appstate.selectedDirection;

export default appstateSlice.reducer;