// import Header from "../../shared/components/header/Header";
import SearchBar from "../../shared/components/searchBar/SearchBar";
import MovieCard from "../../shared/components/card/Card";
import { Box, Stack} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, setSelectedMovie, selectFilteredMovies } from "../../features/movies/movieSlice";
import StatusMessage from "../../shared/components/statusMessage/StatusMessage";
import SearchHistory from "../../shared/components/searchHistory/SearchHistory";
import CustomButton from "../../shared/components/button/CustomeButton";
import { useEffect, useState } from "react";

const MoviesDisplay = () => {
  const { status } = useSelector((state) => state.movies);
  const movies = useSelector(selectFilteredMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  const handleMovieClicked = (movie) => {
    dispatch(setSelectedMovie(movie));
    navigate(`/movie/${movie.id}`);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12); 
  };

  if (status === "loading") return <StatusMessage message="Loading..." />;
  if (status === "failed") return <StatusMessage message="Error loading movies." />;

  return (
    <Box>
      {/* <Header /> */}

      <Box sx={{ marginTop: "1rem" }}>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          spacing={1}
          padding={"0.2rem"}
        >
          <SearchBar />
          <SearchHistory />
        </Stack>
      </Box>

    
      <MovieCard
        movieData={movies.slice(0, visibleCount)}
        onMovieClicked={handleMovieClicked}
      />

    
      {visibleCount < movies.length && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CustomButton label="Load More" onClick={handleLoadMore} />
        </Box>
      )}
    </Box>
  );
};

export default MoviesDisplay;

