export const selectMovies = (state) => state.movies.items;
export const selectStatus = (state) => state.movies.status;
export const selectSearchTerm = (state) => state.movies.searchTerm;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;
export const selectSearchHistory = (state) => state.movies.searchHistory;

export const selectFilteredMovies = (state) => {
  const items = selectMovies(state);
  const searchTerm = selectSearchTerm(state);
  if (!searchTerm) return items;
  return items.filter((movie) =>
    movie.originalTitle?.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
