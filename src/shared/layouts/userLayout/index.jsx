import React from 'react'
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
const UserLayout = () => {
  return (
    <Box bgcolor={"#3D3539"} minHeight={"100vh"}>
      <Header />
      <main> 
        <Outlet />
      </main>
    </Box>
  )
}

export default UserLayout;