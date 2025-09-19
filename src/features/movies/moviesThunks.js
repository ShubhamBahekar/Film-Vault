import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesByTitle } from "./moviesService";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMoviesByTitle();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
