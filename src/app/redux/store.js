import { configureStore } from "@reduxjs/toolkit";
import { doctorsDataReducer } from "./slices/doctorsDAta";
import { expolorePAgeReducer } from "./slices/explore";
export const store = configureStore({
    reducer : {
        drData : doctorsDataReducer,
        explorePage : expolorePAgeReducer
    }
})