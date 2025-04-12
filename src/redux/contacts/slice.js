import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";

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
            .addCase(deleteContact.rejected, typicalRejected)
            .addCase(updateContact.pending, typicalPending)
            .addCase(updateContact.rejected, typicalRejected)
            .addCase(updateContact.fulfilled, state => {
                state.isLoading = false;
            });
    }
});


export default slice.reducer;