import * as React from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box,Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Chip from "@mui/material/Chip";
import { ParentBox, CardTag , ImageWrapper} from "./Card.styles";

const MovieCard = ({ movieData, onMovieClicked }) => {


  return (
    <ParentBox>
      {movieData.map((movie, index) => (
        <CardTag
          key={index}
          onClick={()=>onMovieClicked(movie)}   
        >
          
          {/* <ImageWrapper className="image-wrapper">
          </ImageWrapper> */}
          {/* <Box display={"flex"} justifyContent={"center"}>
            <img
              src={movie.primaryImage?.url}
              alt={movie.primaryTitle}
              style={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                transform: "rotate(0deg)",  
                transition: "transform 0.3s ease", 
                pointerEvents: "none",
              }}
              
            />
       </Box> */}

       <Box display={"flex"} justifyContent={"center"}>
            <img
              src={movie.primaryImage?.url}
              alt={movie.primaryTitle}
              style={{
                height: "200px",
                width: "100%",
                objectFit: "fill",
                transform: "rotate(0deg)",  
                transition: "transform 0.3s ease", 
                pointerEvents: "none",
              }}
              
            />
       </Box>






          <CardContent sx={{color: "pink" }} >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent={"center"}
              spacing={2}
            >
              <Chip
                label={movie.primaryTitle}
                variant="outlined"
                sx={{ color: "white", fontSize: "1.5rem" ,fontWeight:700}}
              />

              <Chip
                label={movie.type}
                variant="outlined"
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  backgroundColor: "darkgreen",
                }}
              />

              <Chip
                label={movie.startYear}
                variant="outlined"
                sx={{ color: "white", fontSize: "1.5rem" }}
              />
            </Stack>
          </CardContent>
        </CardTag>
      ))}
    </ParentBox>
  );
};

export default MovieCard;