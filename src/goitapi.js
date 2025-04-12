import axios from 'axios';

axios.defaults.baseURL = "https://connections-api.goit.global";

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const goitSignUp = async user => {
    const response = await axios.post("/users/signup", user);
    return response.data;
};

export const goitLogin = async user => {
    const response = await axios.post("/users/login", user);
    return response.data;
};

export const goitLogout = async () => {
    await axios.post("/users/logout");
};

export const goitRefreshUser = async () => {
    const response = await axios.get("/users/current");
    return response.data;
};

export const goitFetchContacts = async () => {
    const response = await axios.get("/contacts");
    return response.data;
};

export const goitAddContact = async contact => {
    const response = await axios.post("/contacts", contact);
    return response.data;
};

export const goitUpdateContact = async (contact, id) => {
    const response = await axios.patch(`/contacts/${id}`, contact);
    return response.data;
};

export const goitDeleteContact = async id => {
    const response = await axios.delete(`/contacts/${contact.id}`);
    return response.data;
};