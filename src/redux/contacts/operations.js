import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitFetchContacts, goitAddContact, goitDeleteContact } from "../../goitapi";
export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const contacts = await goitFetchContacts();
        return contacts;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const newContact = await goitAddContact(contact);
        return newContact;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thinkAPI) => {
    try {
        const deletedContact = await goitDeleteContact(id);
        return deletedContact.id;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})