import { createSlice } from "@reduxjs/toolkit";
import { light, dark } from "../../components/styles/Theme.styled"

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