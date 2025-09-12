import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import { Box, IconButton } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';


function Header() {


  return (
    <AppBar position="static" sx={{ bgcolor: "lightslategray" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexGrow: 1, 
            }}
          >
            <MovieIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FilmVault
            </Typography>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;