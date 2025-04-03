import axios from 'axios';

axios.defaults.baseURL = "https://6787f51ac4a42c916108e29f.mockapi.io/api/v1";

export const mockFetchContacts = async () => {
    const response = await axios.get("/contacts");
    return response.data;
};

export const mockAddContact = async contact => {
    const response = await axios.post("/contacts", contact);
    return response.data;
};

export const mockDeleteContact = async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
};