// src/redux/slices/addToCart.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedAppoinment: [],
  appoinmentCount: 0,
};

const addToCart = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    setAddtoCart: (state, action) => {
      const isAlreadyAdded = state.addedAppoinment.find(
        (dr) => dr.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.addedAppoinment.push({ ...action.payload });
        state.appoinmentCount += 1;
      }
    },

    setRemoveDoctorFromCart: (state, action) => {
      const updated = state.addedAppoinment.filter(
        (dr) => dr.id !== action.payload
      );
      if (updated.length !== state.addedAppoinment.length) {
        state.addedAppoinment = updated;
        state.appoinmentCount -= 1;
      }
    },

    // Handles calendar appointments
    setCalenderAppointment: (state, action) => {
      state.addedAppoinment.push({ ...action.payload });
      state.appoinmentCount += 1;
    },

    setCalendarAllAppointments: (state, action) => {
      state.addedAppoinment = [...action.payload];
      state.appoinmentCount = action.payload.length;
    }
  },
});

export const {
  setAddtoCart,
  setRemoveDoctorFromCart,
  setCalenderAppointment,
  setCalendarAllAppointments,
} = addToCart.actions;

export const addToCartSlice = addToCart.reducer;
