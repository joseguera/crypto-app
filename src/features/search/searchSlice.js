import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openCloseSearch: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { openCloseSearch } = searchSlice.actions;

export default searchSlice.reducer;