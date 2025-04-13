
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    explorePageData : []
}

const explorePageSlice = createSlice({
    name : "explorePage",
    initialState,
    reducers :{
        setExplorePageData : (state , action)=>{
            state.explorePageData(...action.payload)
        }
    }
})

export const {setExplorePageData} = explorePageSlice.actions;
export const  expolorePAgeReducer = explorePageSlice.reducer;