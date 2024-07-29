import React from 'react'
import { CircularProgress, Button as MuiButton } from '@mui/material'


const Button = ({ loading, children, disabled, startIcon, onClick, sx, ...props }) => {
  return (
    <MuiButton
      fullWidth
      variant='contained'
      size='large'
      disabled={loading || disabled}
      startIcon={loading ? <CircularProgress size={20} /> : startIcon}
      onClick={onClick}
      sx={{ textTransform: 'none', ...sx }}
      {...props}
    >

      {children}
    </MuiButton>
  )
}

export default Button