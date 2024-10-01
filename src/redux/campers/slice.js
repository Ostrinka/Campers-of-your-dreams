import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};
const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: () => {},
});
export const campersReducer = campersSlice.reducer;