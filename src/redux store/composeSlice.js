import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
    name: 'compose',
    initialState: {
        value: false
    },
    reducers: {
        togg: (state) => {
            state.value = true
        }
    }
})

export const { togg } = composeSlice.actions

export default composeSlice.reducer