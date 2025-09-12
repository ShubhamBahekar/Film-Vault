import { styled } from "@mui/material";
import {Box} from "@mui/material";
import {Paper} from "@mui/material";



export const ParentTag = styled(Box)(({theme})=>({
  display:"flex",
  width:"100vw" ,
  height:"100vh", 
  justifyContent:"center",
  alignItems:"center",
background:"linear-gradient(to right top, #070411, #07101a, #05191f, #062021, #0e2620)",


 [theme.breakpoints.up("md")]:{
   height:"100vh", 
  },
  
}))

export const PaperTag = styled(Paper)(({theme})=>({
  padding: "0%",
  backgroundColor: "#4D4548",
  background:"linear-gradient(to right top, #232030, #37202d, #422522, #402f19, #323b1e)",
  width:"100vw",
  maxHeight: "100vh",
  overflow:"auto",
  textTransform:"capitalize",

  [theme.breakpoints.up("md")]:{
    width:"100vw",
      borderRadius: "1rem",
       maxHeight: "100vh",
  },
  [theme.breakpoints.up("lg")]:{
    width:"100vw",
      borderRadius: "1rem",
      maxHeight: "100vh",
  },
  [theme.breakpoints.up("xl")]:{
    width:"100vw",
    maxHeight: "100vh",
    
  }
}))

export const MovesDetail = styled(Box)(()=>({
   width: "100vw",
  maxHeight: "auto",
  overflow:"auto",
  display:"flex", 
  flexDirection:"column",
justifyContent:"center",
alignItems:"center",
  flexWrap:"wrap",
  background:"linear-gradient(to right top, #070411, #07101a, #05191f, #062021, #0e2620)",
  padding:"1%"
 
}))

export const MovesTag = styled(Paper)(()=>({
  padding:"0%",width:"50%",
     backgroundColor:"#4D4548",
     borderRadius:"1rem"
}))

export const FancyDivider = styled(Box)(()=>({
    height: 4,
        background: 'linear-gradient(to right, #ff9800, #f44336)',
        borderRadius: 2,
        marginBottom:4
}))

export const ChipTag = styled(Box)(()=>({
   color:"red",
   margin:"0.5rem",
  textTransform:"capitalize"
}))