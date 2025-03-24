import { createSlice } from "@reduxjs/toolkit";

export const filterMenuSlice = createSlice({
    name: "filter",
    initialState: {
        toggle: false
    },
    reducers: {
        toggleFilter: (state) => {
            state.toggle = !state.toggle;
        }
    }
});

export const { toggleFilter } = filterMenuSlice.actions;
export default filterMenuSlice.reducer;