import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import currencyReducer from "../features/currency/currencySlice";
import portfolioReducer from "../features/portfolio/portfolioSlice";
import searchReducer from "../features/search/searchSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  currency: currencyReducer,
  portfolio: portfolioReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
