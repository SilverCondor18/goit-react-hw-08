import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: persistedFiltersReducer
    }
});

const contactsPersistConfig = {
    key: "contacts_items",
    storage,
    whitelist: ["contacts"]
};
const filtersPersistConfig = {
    key: "name_filter",
    storage,
    whitelist: ["filters"]
};

const persistedContactsReducer = persistReducer(
    contactsPersistConfig,
    contactsReducer
);

const persistedFiltersReducer = persistReducer(
    filtersPersistConfig,
    filtersReducer
);

export const persistor = persistStore(store);