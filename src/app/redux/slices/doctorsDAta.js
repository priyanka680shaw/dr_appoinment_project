import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drDAta : [] , // using search filter here
    originalDrDAta : [] //it will ensure all the toime i have my all data with me 
    
}

const doctorsData = createSlice({
    name : 'doctorData',
    initialState,
    reducers : {
        setDrData : (state , action)=>{
            state.drDAta = [...action.payload]
        },
        setResetDrData : (state , action)=>{
            state.drDAta = [...state.originalDrDAta]
        },
        setOriginalDrData  :(state , action)=>{
            state.originalDrDAta = [...action.payload],
            state.drDAta = [... action.payload]
        }

    }

})

export const {setDrData , setOriginalDrData , setResetDrData} = doctorsData.actions;
export const doctorsDataReducer = doctorsData.reducer;