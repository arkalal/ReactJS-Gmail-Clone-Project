import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
    name: 'compose',
    initialState: {
        value: false
    },
    reducers: {
        toggTrue: (state) => {
            state.value = true
        },
        toggFalse: (state) => {
            state.value = false
        }
    }
})

export const { toggTrue, toggFalse } = composeSlice.actions

export default composeSlice.reducer