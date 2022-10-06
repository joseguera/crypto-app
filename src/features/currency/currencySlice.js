import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "usd",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;