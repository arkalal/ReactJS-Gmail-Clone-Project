import { configureStore } from "@reduxjs/toolkit";
import composeReducer from './composeSlice'

export default configureStore({
    reducer: {
        compose: composeReducer
    }
})