import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    },
  },
});

export const { change } = themeSlice.actions;

export default themeSlice.reducer;