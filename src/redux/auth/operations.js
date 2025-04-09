import { goitSignUp, goitLogin, goitLogout, goitRefreshUser } from "../../goitapi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk("auth/signup", async (user, thunkAPI) => {
    try {
        const response = await goitSignUp(user);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const response = await goitLogin(user);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
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
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});