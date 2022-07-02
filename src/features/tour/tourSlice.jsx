import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("tour/fetchData", async () => {
    try {
        const response = await fetch(
            "https://course-api.com/react-tours-project"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    tours: [],
    isLoading: false,
    read: false,
};

export const tourSlice = createSlice({
    name: "tour",
    initialState,
    reducers: {
        setRead: (state, action) => {
            state.read = !state.read;
        },
        removeItem: (state, action) => {
            state.tours = state.tours.filter((data) => {
                return data.id !== action.payload.id;
            });
        },
    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.isLoading = true;
            console.log("pending");
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.tours = action.payload;
            console.log("fulfilled");
        },
        [fetchData.rejected]: (state, action) => {
            state.isLoading = false;
            console.log("rejected");
        },
    },
});

export const { setRead, removeItem } = tourSlice.actions;
export default tourSlice.reducer;
