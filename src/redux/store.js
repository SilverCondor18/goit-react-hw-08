import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './contacts/filtersSlice';
import authReducer from './auth/slice';
import { persistReducer, persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistedAuthReducer
    }
});

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["auth"]
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const persistor = persistStore(store);