import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: {
        filter: ""
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { changeFilter } = slice.actions;

export default slice.reducer;