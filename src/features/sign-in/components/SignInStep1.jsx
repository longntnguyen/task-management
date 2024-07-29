import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import TextField from '../../../components/fields/TextField'
import Button from '../../../components/button/Button'

const SignInStep1 = () => {
  const theme = useTheme()
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField name="phone" placeholder="Your Phone Number" />

      <Button type="submit">
        Next
      </Button>


      <Typography sx={{ marginTop: '40px' }} variant='body1' color="GrayText">
        Don't have an account? <a style={{ color: theme.colors.text.link }} href="#">Sign Up</a>
      </Typography>
    </Box>
  )
}

export { SignInStep1 }