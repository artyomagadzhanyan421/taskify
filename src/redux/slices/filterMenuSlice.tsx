import { createSlice } from "@reduxjs/toolkit";

export const lightSlice = createSlice({
    name: "filter",
    initialState: {
        filter: false
    },
    reducers: {
        toggleFilter: (state) => {
            state.filter = !state.filter;
        }
    }
});

export const { toggleFilter } = lightSlice.actions;
export default lightSlice.reducer;