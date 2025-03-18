import { createSlice } from "@reduxjs/toolkit";

export const lightSlice = createSlice({
    name: "toggle",
    initialState: {
        light: false
    },
    reducers: {
        toggleLight: (state) => {
            state.light = !state.light;
        }
    }
});

export const { toggleLight } = lightSlice.actions;
export default lightSlice.reducer;