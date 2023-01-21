import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home"
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setActiveHeader: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveHeader } = headerSlice.actions;

export default headerSlice.reducer;