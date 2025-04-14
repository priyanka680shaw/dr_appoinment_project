import { configureStore } from "@reduxjs/toolkit";
import { doctorsDataReducer } from "./slices/doctorsDAta";
import { expolorePAgeReducer } from "./slices/explore";
import { addToCartSlice } from "./slices/addToCatr";
import { toggleThemeSlice } from "./slices/darkLightMOde";
export const store = configureStore({
    reducer : {
        drData : doctorsDataReducer,
        explorePage : expolorePAgeReducer,
        addToCart : addToCartSlice,
        toggleButton : toggleThemeSlice
    }
})