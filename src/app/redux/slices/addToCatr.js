import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addedAppoinment : [] ,
    appoinmentCount : 5,
}

const addToCart = createSlice({
    name : "addToCart",
    initialState,
    reducer : {
        setAddtoCart : (state , action)=>{
            state.addedAppoinment.push({...action.payload})
        },
        setAppoinmentCount : (state , action)=>{
            state.appoinmentCount = (action.payload+appoinmentCount)
        }
    }
})

export const {setAddtoCart , setAppoinmentCount} = addToCart.actions;
export const  addToCartSlice = addToCart.reducer;