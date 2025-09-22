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
        px: 17,
        my: 6,
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
