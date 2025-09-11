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

  // Local states instead of Context
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const [evolutionSpecies, setEvolutionSpecies] = useState([]);
  const [movesInDetail, setMovesInDetail] = useState(false);

  // Mock "fetch" using sample data
  useEffect(() => {

      const pokemon = SampleMovieDetailsData; // later replace this with Redux data
      setPokemonImage(pokemon.image);
      setPokemonName(pokemon.name);
      setAbilities(pokemon.abilities);
      setStats(pokemon.stats);
      setMoves(pokemon.moves);
      setEvolutionSpecies(pokemon.evolutionSpecies);
      getAllMoviesTitle();

  }, []);

  const handleDetailMoves = () => {
    setMovesInDetail(!movesInDetail);
  };

  return (
    <ParentTag>
      {movesInDetail ? (
        <Box width={"100vw"} height={"auto"}>
          <MovesDetail>
            <Box>
              {moves.map((item, idx) => (
                <Chip
                  key={idx}
                  label={item}
                  color="success"
                  sx={{ margin: "0.5rem", textTransform: "capitalize" }}
                />
              ))}
            </Box>
            <Button
              onClick={handleDetailMoves}
              color="info"
              variant="outlined"
              sx={{ marginTop: "2rem" }}
            >
              Close
            </Button>
          </MovesDetail>
        </Box>
      ) : (
        <PaperTag>
          {isMobile ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={"auto"}
              minWidth={"340px"}
            >
              <Card
                sx={{
                  width: "100%",
                  background:
                    "linear-gradient(to right top, #232030, #37202d, #422522, #402f19, #323b1e)",
                }}
              >
                <CardMedia
                  sx={{ height: 390, objectFit: "contain", padding: "2.5%" }}
                  image={pokemonImage}
                  title={pokemonName}
                  component={"img"}
                />
              </Card>
            </Box>
          ) : (
            <>
              {/* Desktop View */}
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
              >
                {/* Abilities */}
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={"700"}
                    color="info"
                    padding={1}
                  >
                    Abilities
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    {abilities.map((item, i) => (
                      <Chip key={i} label={item} color="secondary" />
                    ))}
                  </Box>
                </Box>

                {/* Pokémon Image */}
                <CardMedia
                  sx={{ maxHeight: 320, maxWidth: 280, objectFit: "contain" }}
                  image={pokemonImage}
                  title={pokemonName}
                  component={"img"}
                />

                {/* Evolution Chain */}
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={"700"}
                    color="info"
                    padding={1}
                  >
                    Evolution-Chain
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    {evolutionSpecies.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <Chip label={item} color="secondary" sx={{ padding: 0 }} />
                        {idx < evolutionSpecies.length - 1 && (
                          <Box display="flex" justifyContent="center">
                            <ArrowDownward color="error" />
                          </Box>
                        )}
                      </React.Fragment>
                    ))}
                  </Box>
                </Box>
              </Box>
            </>
          )}

          {/* Stats + Moves */}
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
                  color="warning"
                  fontWeight={"700"}
                  padding={1}
                >
                  {pokemonName}
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
                {stats?.map((stat, i) => (
                  <Box
                    key={i}
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    columnGap={3}
                  >
                    <Typography
                      fontSize={"1.2rem"}
                      color="primary"
                      textTransform={"capitalize"}
                    >
                      {stat.name}: <strong>{stat.value}</strong>
                    </Typography>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress
                        variant="determinate"
                        value={Math.min((stat.value / 100) * 100, 100)}
                        thickness={6}
                        size={80}
                        sx={{ color: "#ff7043" }}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="subtitle2"
                          component="div"
                          color="success"
                        >
                          {`${Math.round(
                            Math.min((stat.value / 100) * 100, 100)
                          )}%`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <FancyDivider />
            <Box>
              <Typography variant="h6" color="info" fontWeight={"700"}>
                Moves:
              </Typography>
              <Box display="flex" gap={2} flexWrap="wrap">
                {moves.slice(0, 5).map((item, idx) => (
                  <Chip key={idx} label={item} color="success" />
                ))}
                <Button onClick={handleDetailMoves}>View More</Button>
              </Box>
            </Box>
          </CardContent>
        </PaperTag>
      )}
    </ParentTag>
  );
};

export default MovieDetailView;
