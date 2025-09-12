import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ label, onClick, variant = "contained", sx = {}, ...props }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        bgcolor: "#FF6F61",
        color: "white",
        borderRadius: "1rem",
        px: 3,
        my: 2,
        "&:hover": { bgcolor: "#ff4d3d" },
        ...sx,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
