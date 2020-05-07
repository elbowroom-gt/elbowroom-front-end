import { configureStore } from '@reduxjs/toolkit';
import appstateReducer from "./appstateSlice"

export default configureStore({
    reducer: {
        transit: appstateReducer,
    }
});