import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlices";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    // this object determines what key our 'big' state object has
    // the key is songs
    // value is created by songsSlice.reducer
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addMovie, removeMovie, addSong, removeSong };

//const startingState = store.getState();
