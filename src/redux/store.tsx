import { configureStore } from "@reduxjs/toolkit";
import lightReducer from "./slices/lightSlice";
import filterMenuReducer from "./slices/filterMenuSlice";
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    light: lightReducer,
    toggle: filterMenuReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;