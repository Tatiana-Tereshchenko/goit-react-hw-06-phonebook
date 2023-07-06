import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from './constants';

const filterInitialsState = '';

const filtersSlice = createSlice({
    name: FILTER,
    initialState: filterInitialsState,
    reducers: {
        setContactsFilter(state, action) {
            return (state = action.payload)
        },
    },

});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;