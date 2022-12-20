import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch: (state) => {
      state.value = !state.value
    },
  },
});

export const { openSearch } = searchSlice.actions;

export default searchSlice.reducer;