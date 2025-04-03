import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const typicalPending = state => {
    state.isLoading = true;
    state.error = null;
};

const typicalRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, typicalPending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, typicalRejected)
            .addCase(addContact.pending, typicalPending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, typicalRejected)
            .addCase(deleteContact.pending, typicalPending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter(c => c.id != action.payload);
            })
            .addCase(deleteContact.rejected, typicalRejected);
    }
});

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector([selectContacts, selectNameFilter], (contacts, nameFilter) => contacts.filter(c => c.name.toLowerCase().includes(nameFilter.toLowerCase())));

export default slice.reducer;