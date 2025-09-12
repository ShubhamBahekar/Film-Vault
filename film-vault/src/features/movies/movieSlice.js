import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getMoviesByTitle } from '../../services/authServices';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await getMoviesByTitle();
    return response;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        items: [],
        status: 'idle',
        selectedMovie: null,
        searchTerm: "",
        searchHistory: [],
    }, 
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
      if (term) {
        state.searchHistory.push(term);
        if (state.searchHistory.length > 5) {
          state.searchHistory.shift();
        }
      }
    },
  },
    extraReducers :(builder) => {
        builder.addCase(fetchMovies.pending,(state)=>{
            state.status = 'loading';
        }).addCase(fetchMovies.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.items = action.payload.titles || [];
        }).addCase(fetchMovies.rejected,(state)=>{
            state.status = 'failed'; 
        });
    }
})

export const { setSelectedMovie, clearSelectedMovie,setSearchTerm,addSearchToHistory } = movieSlice.actions;

export const selectFilteredMovies = (state) => {
  const { items, searchTerm } = state.movies;
  if (!searchTerm) return items;
  return items.filter((movie) =>
    movie.originalTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


export default movieSlice.reducer;