import Header from "../../header/Header";
import SearchBar from "../../shared/components/searchBar/SearchBar";
import MovieCard from "../../shared/components/card/Card";
import SampleData from "../../SampleData.json";
import { Box, Stack } from "@mui/material";


const MoviesDisplay = () => {

 
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
          <MovieCard movieData={SampleData} />
        </Box>
    
    </>
  );
};

export default MoviesDisplay;