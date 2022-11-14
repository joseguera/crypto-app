import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: "bitcoin", date: "02-02-2022", amount: 2.6 },
    { id: "ethereum", date: "02-02-2022", amount: 1 }
  ]
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updatePortfolio: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { updatePortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer;
