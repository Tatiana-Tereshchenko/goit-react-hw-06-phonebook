import {  combineReducers } from "@reduxjs/toolkit";
import { CONTACTS } from "./constants";
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [CONTACTS],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    
})
export const persistor = persistStore(store);