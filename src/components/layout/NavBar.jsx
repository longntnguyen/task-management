import React, { useState } from 'react'
import { Avatar, Badge, Box } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfilePopover from './ProfilePopover';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
      <Box className="navbar" sx={{
        height: '60px',
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        padding: '12px',
        borderBottom: '1.5px solid #f5f5f5'
      }}>
        <Badge sx={{
          '& .MuiBadge-badge': {
            backgroundColor: 'red'
          }
        }} badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>

        <Avatar onClick={e => setAnchorEl(e.currentTarget)} sx={{ width: 35, height: 35, marginLeft: '20px', cursor: 'pointer' }}>
          NT
        </Avatar>
      </Box>

      <ProfilePopover anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
    </>
  )
}

export { NavBar }