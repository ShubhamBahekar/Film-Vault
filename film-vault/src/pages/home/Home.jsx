import Header from "../../header/Header";
import SearchBar from "../../shared/components/searchBar/SearchBar";
import MovieCard from "../../shared/components/card/Card";
// import SampleData from "../../SampleData.json";
import { Box, Stack } from "@mui/material";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/movies/movieSlice";
import { useEffect } from "react";

const MoviesDisplay = () => {
  
  const {items:movies,status} = useSelector((state) => state.movies);
  // console.log("Movies from Redux Store:", movies);
  const dispatch = useDispatch();

useEffect(() => {
  if(status === 'idle') {
    dispatch(fetchMovies());
  }
}, [status]);
  

if (status === 'loading') {
  return <div>Loading...</div>;
}
if (status === 'failed') {
  return <div>Error loading movies.</div>;
}

  return (
    <>
      
        <Box bgcolor={"#3D3539"}>
          <Header />

          <Box sx={{ marginTop: "1rem" }}>
            <Stack
              direction={"row"}
              justifyContent="center"
              spacing={2}
              padding={"0.2rem"}
            >
              <SearchBar />
              
            </Stack>
          </Box>
          <MovieCard movieData={movies} />
        </Box>
    
    </>
  );
};

export default MoviesDisplay;