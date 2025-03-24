import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    title: string;
    startDate: string;
    endDate: string;
    status: string;
    description: string;
}

const initialState: FilterState = {
    title: '',
    startDate: '',
    endDate: '',
    status: '',
    description: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<Partial<FilterState>>) {
            return { ...state, ...action.payload };
        },
        resetFilter() {
            return initialState;
        },
    },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;