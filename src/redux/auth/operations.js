import { goitSignUp, goitLogin, goitLogout, goitRefreshUser, setAuthHeader, clearAuthHeader } from "../../goitapi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk("auth/signup", async (user, thunkAPI) => {
    try {
        const response = await goitSignUp(user);
        setAuthHeader(response.token);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const response = await goitLogin(user);
        setAuthHeader(response.token);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refreshUser", async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        if (state.auth.token === null)
        {
            throw new Error("Unable to fetch user");
        }
        setAuthHeader(state.auth.token);
        const response = await goitRefreshUser();
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await goitLogout();
        clearAuthHeader();
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});