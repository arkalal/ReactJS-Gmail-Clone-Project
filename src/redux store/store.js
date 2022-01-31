import { configureStore } from "@reduxjs/toolkit";
import composeReducer from './composeSlice'
import userReducer from './userSlice'

export default configureStore({
    reducer: {
        compose: composeReducer,
        user: userReducer
    }
})