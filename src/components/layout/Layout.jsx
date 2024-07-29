import { Box } from '@mui/material'
import React from 'react'
import { SideBar } from './SideBar'
import { NavBar } from './NavBar'


const Layout = ({ children }) => {
  return (
    <Box sx={{
      display: "flex",
      height: "100vh"
    }}>
      <SideBar />
      <Box sx={{
        flexGrow: 1
      }}>
        <NavBar />
        <Box width="100%" marginTop="20px" padding="1rem">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export { Layout }