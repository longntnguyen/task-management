import { Box, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditProfileDialog from './EditProfileDialog'
import PersonIcon from '@mui/icons-material/Person';

const ProfilePopover = ({ anchorEl, onClose }) => {
  const [openEditProfile, setOpenEditProfile] = useState(false)
  return (
    <>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={() => {
          onClose()
          setOpenEditProfile(true)
        }}>
          <PersonIcon />
          <Typography variant='body1' sx={{ padding: "8px" }}>Edit profile</Typography>
        </Box>
      </Popover>

      <EditProfileDialog open={openEditProfile} onClose={() => setOpenEditProfile(false)} />
    </>
  )
}

export default ProfilePopover