import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import TextField from '../../../components/fields/TextField'
import Button from '../../../components/button/Button'
import { PATHS } from '../../../constants'
import { useNavigate } from 'react-router-dom'

const SignInStep1 = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField name="phone" placeholder="Your Phone Number" />

      <Button type="submit">
        Next
      </Button>


      <Typography sx={{ marginTop: '40px' }} variant='body1' color="GrayText">
        Don't have an account? <span style={{ color: theme.colors.text.link, cursor: 'pointer' }} onClick={() => navigate(PATHS.signUp)}>Sign Up</span>
      </Typography>
    </Box>
  )
}

export { SignInStep1 }