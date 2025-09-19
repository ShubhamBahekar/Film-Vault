import { useSelector, useDispatch } from "react-redux";
import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { setSearchTerm } from "../../../features/movies";

const SearchHistory = () => {
  const history = useSelector((state) => state.movies.searchHistory);
  const dispatch = useDispatch();

  const handleHistoryClick = (term) => {
    dispatch(setSearchTerm(term));
  };

  if (history.length === 0) return null;

  return (
    <Box
      sx={{
        marginTop: "0.5rem",
        width: "30rem",
        background: "#2c2c2c",
        color: "white",
        borderRadius: "0.5rem",
        zIndex: 10,
      }}
    >
      <List>
        {history.map((term, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleHistoryClick(term)}>
              {term}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchHistory;
