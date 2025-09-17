import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";

export const ParentBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  marginBottom:"1rem",
  height: "auto",
  position: "relative",
  cursor: "pointer",
}));

export const CardTag = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: "3%",
  borderRadius: "10%",
  boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
 
  backgroundColor: "#4D4548",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px) scale(1.05)",
      boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
  },
  position: "relative",
  textTransform: "capitalize",

  "&:hover .image-wrapper": {
    transform: "rotate(180deg) scale(1.03)",
    borderRadius: "0 0 50% 50%",
    transition: "all 0.8s ease",
  },

  [theme.breakpoints.up("xs")]: {
    maxWidth: "90%",
    marginTop: "10%",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "45%",
  },

  [theme.breakpoints.up("md")]: {
    maxWidth: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "23%",
    margin:"3% 1% 0% 1%"
  },
}));

export const ImageWrapper = styled(Box)(() => ({
  height: 200,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#51B55B",
  background:"linear-gradient(to right top, #291514, #3f181f, #531a31, #651d49, #702668)",
  borderRadius: "0 0 50% 50% ",
  transform: "rotate(0deg)",

  position: "absolute",
}));