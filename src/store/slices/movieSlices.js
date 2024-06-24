import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      return [...state, action.payload];
    },
    removeMovie(state, action) {
      return state.filter((element) => element !== action.payload);
    },
    // reset(state, action) {
    //   return [];
    // },
  },

  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;
