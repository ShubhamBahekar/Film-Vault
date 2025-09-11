import Header from "../../header/Header";
import SearchBar from "../../shared/components/searchBar/SearchBar";
import MovieCard from "../../shared/components/card/Card";
import SampleData from "../../SampleData.json";
import useMovies from "../../hooks/useMovies";
import { Box, Stack } from "@mui/material";
import { useState,useEffect } from "react";


const MoviesDisplay = () => {
  const [movieData, setMovieData] = useState([])
  const { getAllMoviesTitle } = useMovies();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMoviesTitle();
      const movies = data.titles;
      setMovieData(movies);
      console.log("Fetched Movies:", movies);
    };

    fetchData();
  }, [getAllMoviesTitle]);

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
          <MovieCard movieData={movieData} />
        </Box>
    
    </>
  );
};

export default MoviesDisplay;