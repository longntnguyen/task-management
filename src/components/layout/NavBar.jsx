import { Box } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <Box className="navbar" sx={{
      height: '60px',
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      padding: '12px',
      borderBottom: '1.5px solid #f5f5f5'
    }}>
      NavBar
    </Box>
  )
}

export { NavBar }