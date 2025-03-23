import { createSlice } from "@reduxjs/toolkit";

export const lightSlice = createSlice({
    name: "filter",
    initialState: {
        filter: false
    },
    reducers: {
        filter: (state) => {
            state.filter = !state.filter;
        }
    }
});

export const { filter } = lightSlice.actions;
export default lightSlice.reducer;