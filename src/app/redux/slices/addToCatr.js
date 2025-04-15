import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addedAppoinment : [] ,
    appoinmentCount : 0,
}

const addToCart = createSlice({
    name : "addToCart",
    initialState,
    reducers : {
        setAddtoCart : (state , action)=>{

            const isAlreadyAdded = state.addedAppoinment.find((dr)=>dr.id === action.payload.id)
            if(!isAlreadyAdded){
                state.addedAppoinment.push({...action.payload})
                state.appoinmentCount+=1
            }
            
        },
      //remove from tye card data 

      setRemoveDoctorFromCart : (state,action)=>{
        const newList = state.addedAppoinment.filter((dr)=>dr.id !== action.payload)

        // if dr was actully removed
        if(newList.length !== state.addedAppoinment.length){
            state.addedAppoinment = newList;
            state.appoinmentCount -=1;

        }
      }
    }
})

export const {setAddtoCart , setAppoinmentCount , setRemoveDoctorFromCart } = addToCart.actions;
export const  addToCartSlice = addToCart.reducer;