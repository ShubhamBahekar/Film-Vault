import Header from "../../header/Header";
import SearchBar from "../../shared/components/searchBar/SearchBar";
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
          
        </Box>
    
    </>
  );
};

export default MoviesDisplay;