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

export default movieSlice.reducer;