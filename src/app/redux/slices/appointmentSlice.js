// redux/slices/appointmentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    removeAppointment: (state, action) => {
      return state.filter((apt) => apt.id !== action.payload);
    },
    editAppointment: (state, action) => {
      const index = state.findIndex((apt) => apt.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addAppointment, removeAppointment, editAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
