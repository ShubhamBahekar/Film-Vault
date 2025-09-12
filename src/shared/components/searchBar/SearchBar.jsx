import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearchTerm, addSearchToHistory } from "../../../features/movies/movieSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const searchTextField = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "1rem",
      color: "white",
      "& fieldset": {
        borderColor: "white",
        borderWidth: "3px",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(addSearchToHistory(inputValue));
      e.target.blur();
    }
  };

  return (
    <Box sx={{ width: "25rem" }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        sx={{ width: "100%", ...searchTextField }}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default SearchBar;
