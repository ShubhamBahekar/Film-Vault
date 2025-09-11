import { Box, Card, CircularProgress, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  PaperTag,
  FancyDivider,
  MovesDetail,
  ParentTag,
} from "./MovieDetails.styles";
import { Chip } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

import useMovies from "../../hooks/useMovies";
import SampleMovieDetailsData from "../../SampleMovieDetailsData.json"

const MovieDetailView = () => {
    const { getAllMoviesTitle } = useMovies();
  const isMobile = useMediaQuery("(max-width:600px)");


  const [moviesData, setMovieData] = useState([]);
  
  useEffect(() => {


    const fetchData = async () => {
      const data = await getAllMoviesTitle();
      const movies = data.titles;
      console.log("Fetched Movies:", movies);
      setMovieData(movies);
    };
    fetchData();
  }, []);

  

  return (
    <ParentTag>
      <PaperTag>
          {isMobile ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={"auto"}
              minWidth={"340px"}
            >
                {moviesData.map((movie) => (

              <Card
                sx={{
                  width: "100%",
                  background:
                    "linear-gradient(to right top, #232030, #37202d, #422522, #402f19, #323b1e)",
                }}
              >
                <CardMedia
                  sx={{ height: 390, objectFit: "contain", padding: "2.5%" }}
                  image={movie.primaryImage?.url}
                  title={movie.originalTitle}
                  component={"img"}
                />
              </Card>

                ))}
             
            </Box>
          ) : (
            
           <>
  {moviesData.length > 0 && (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="700"
          color="info"
          padding={1}
        >
          Genres
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={2}
        >
          {moviesData[0].genres?.map((genre, i) => (
            <Chip key={i} label={genre} color="secondary" />
          ))}
        </Box>
      </Box>
      <CardMedia
        sx={{ maxHeight: 320, maxWidth: 380, objectFit: "fill" }}
        image={moviesData[0].primaryImage?.url}
        title={moviesData[0].originalTitle}
        component="img"
      />

    
     <Box>
        <Typography
          variant="h4"
          fontWeight="700"
          color="info"
          padding={1}
        >
          Rating
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={2}
        >
            <Typography color="white">Aggregate: <Chip  label={moviesData[0].rating.aggregateRating} color="secondary" /></Typography>

            <Typography color="white">Votes: <Chip  label={moviesData[0].rating.voteCount} color="secondary" /></Typography>
          </Box>
      </Box>
    </Box>
  )}
</>

          )}

    
          {moviesData && moviesData.length > 0 && (
            <CardContent>
              <Box
                marginBottom={"0.5rem"}
                display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Typography
                  variant="h3"
                  color="white"
                  fontWeight={"700"}
                  padding={1}
                >
                  {moviesData[0].originalTitle}
                </Typography>
              </Box>
              <FancyDivider />



              <Box
                display={"flex"}
                justifyContent={"space-around"}
                flexWrap={"wrap"}
                columnGap={3}
                rowGap={1}
              >
                {moviesData && moviesData.length > 0 && (
                  <Box
                 
                    display={"flex"}
                    // justifyContent={"space-around"}
                    alignItems={"center"}
                    flexDirection={"row"}
                    columnGap={3}
                  >
                    <Typography color="white">Id: <Chip  label={moviesData[0].id} color="secondary" /></Typography>

                     <Typography color="white">Type: <Chip  label={moviesData[0].type} color="secondary" /></Typography>

                      <Typography color="white">Start Year: <Chip  label={moviesData[0].startYear} color="secondary" /></Typography>

                       <Typography color="white">Runtime Seconds: <Chip  label={moviesData[0].runtimeSeconds} color="secondary" /></Typography>
                    
                  </Box>
                )}
              </Box>




            </Box>
            <FancyDivider />
            <Box>
              <Typography variant="h4" color="info" fontWeight={"700"}>
                Plot:
              </Typography>
              <Typography variant="h6" color="white" fontWeight={"500"}>
                {moviesData[0].plot}
              </Typography>
            </Box>
          </CardContent>

          )}

          
        </PaperTag>
    </ParentTag>
  );
};

export default MovieDetailView;
