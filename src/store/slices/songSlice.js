import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  //   Initial State
  initialState: [],
  //   Mini Reducers Functions
  // In each mini function we will make/apply a state update
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // STATE IS NOT THE BIG STATE OBJECT
      // IN THE STORE
      // IT IS THE PIECE OF STATE MANAGED
      // BY THIS REDUCER
      console.log("state in reducer", state);
      state.push(action.payload);
      //   return [...state, action.payload];
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      // const findIdx = state.findIndex((element) => element === action.payload);
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      //   return state.filter((element) => element !== action.payload);
    },
  },
  //   extraReducers(builder) {
  //     builder.addCase(movieSlice.actions.reset, (state, action) => {
  //       return [];
  //     });
  //   },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
