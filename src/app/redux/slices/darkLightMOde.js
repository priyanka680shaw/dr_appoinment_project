import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleTheme : "light"
}

const toggleTheme = createSlice({
    name : "togglThemeButton",
    initialState,
    reducers : {
        setToggleTheme : (state , action)=>{
            state.toggleTheme = (action.payload)
        }
    }
})

export const{setToggleTheme} = toggleTheme.actions;
export const toggleThemeSlice = toggleTheme.reducer;
