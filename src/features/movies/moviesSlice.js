import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./moviesThunks";

const initialState = {
  items: [],
  status: "idle",
  selectedMovie: null,
  searchTerm: "",
  searchHistory: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addSearchToHistory: (state, action) => {
      const term = action.payload.trim();
      if (term && !state.searchHistory.includes(term)) {
        state.searchHistory = [...state.searchHistory.slice(-4), term];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload?.titles || [];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch movies";
      });
  },
});

export const {
  setSelectedMovie,
  clearSelectedMovie,
  setSearchTerm,
  addSearchToHistory,
} = movieSlice.actions;

export default movieSlice.reducer;
