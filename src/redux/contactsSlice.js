import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { CONTACTS } from 'redux/constants';


const contactsInitialState = [];

const contatcsSlice = createSlice({
    name: CONTACTS,
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                return [...state, action.payload];
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        },
    },
});

export const { addContact, deleteContact } = contatcsSlice.actions;
export const contactsReducer = contatcsSlice.reducer;