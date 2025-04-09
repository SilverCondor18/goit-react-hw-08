import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, signUp } from "./operations";
import { clearAuthHeader, setAuthHeader } from "../../goitapi";


const slice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                const { user, token } = action.payload;
                state.user = user;
                state.token = token;
                setAuthHeader(token);
                isLoggedIn = true;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                const { user, token } = action.payload;
                state.user = user;
                state.token = token;
                setAuthHeader(token);
                isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user.name = null;
                state.user.email = null;
                state.token = null;
                clearAuthHeader();
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            });
    }
});

export default slice.reducer;