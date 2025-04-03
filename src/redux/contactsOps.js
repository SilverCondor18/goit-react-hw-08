import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockFetchContacts, mockAddContact, mockDeleteContact } from "../mockapi";
export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const contacts = await mockFetchContacts();
        return contacts;
    }
    catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const newContact = await mockAddContact(contact);
        return newContact;
    }
    catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thinkAPI) => {
    try {
        const deletedContact = await mockDeleteContact(id);
        return deletedContact.id;
    }
    catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
})