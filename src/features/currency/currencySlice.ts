import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
  value: string
}

const initialState: CurrencyState = {
  value: "usd",
}

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;