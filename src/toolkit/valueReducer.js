import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
    name : 'value',
    initialState:0,
    reducers: {
        increment: (state, action)=>{
            return state+1
        },
        decrement:(state, action)=>{
            return state-1
        }
    }
})

export const {increment, decrement} = valueSlice.actions

export default valueSlice.reducer;