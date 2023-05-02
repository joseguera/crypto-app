import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: "bitcoin", date: "12-12-2018", amount: 12 },
    { id: "ethereum", date: "12-12-2018", amount: 12 }
  ]
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updatePortfolio: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deletePortfolioAsset: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id)
    },
  },
});

export const { updatePortfolio, deletePortfolioAsset } = portfolioSlice.actions;

export default portfolioSlice.reducer;

