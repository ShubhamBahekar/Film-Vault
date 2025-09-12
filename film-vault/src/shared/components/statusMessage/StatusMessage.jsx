import { Typography } from "@mui/material";

const StatusMessage = ({ message }) => (
  <Typography
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    variant="h4"
  >
    {message}
  </Typography>
);

export default StatusMessage;
