import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    home: true,
    portfolio: false,
    summary: false,
    search: false
  }
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    selectActiveButton: (state, action) => {
      if (action.payload === "home") {
        state.value = { home: true, previousData: false }
      }
      if (action.payload === "portfolio") {
        state.value = { portfolio: true, previousData: false }
      }
      if (action.payload === "summary") {
        state.value = { summary: true, previousData: false }
      }
      if (action.payload === "search") {
        state.value = { search: true, previousData: false }
      }
    },
  },
});

export const { selectActiveButton } = footerSlice.actions;

export default footerSlice.reducer;