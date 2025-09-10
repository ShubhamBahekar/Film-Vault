import React from "react";
import { TextField } from "@mui/material";
// import { useContext } from "react";
// import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
const SearchBar = () => {
//   const { handlePokemonSearch, searchText } = useContext(pokemonContext);

  const searchTextField = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "1rem",
     color:"white",
    "& fieldset": {
      borderColor: "white",
      borderWidth: "3px"
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


  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      sx={{ width: "30rem", ...searchTextField}}
    //   value={searchText}
    //   onChange={handlePokemonSearch}
    />
  );
};

export default SearchBar;