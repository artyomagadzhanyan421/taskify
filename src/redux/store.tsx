import { configureStore } from "@reduxjs/toolkit";
import lightReducer from "./slices/lightSlice";
import filterReducer from "./slices/filterMenuSlice";

export const store = configureStore({
  reducer: {
    light: lightReducer,
    filter: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;