import { configureStore } from "@reduxjs/toolkit";
import lightReducer from "./slices/lightSlice";

export const store = configureStore({
  reducer: {
    light: lightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;