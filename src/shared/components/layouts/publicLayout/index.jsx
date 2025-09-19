import React from 'react'
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
const PublicLayout = () => {
  return (
    <Box bgcolor={"#3D3539"} minHeight={"100vh"}>
      <main> 
        <Outlet />
      </main>
    </Box>
  )
}

export default PublicLayout;