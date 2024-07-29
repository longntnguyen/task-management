import React from 'react'
import TextField from '../../../components/fields/TextField'
import Button from '../../../components/button/Button'
import { Box, Typography, useTheme } from '@mui/material'

const SignInStep2 = ({ onSendCode }) => {
  const theme = useTheme()
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField name="code" placeholder="Enter Your code" />
      <Button type="submit">
        Submit
      </Button>

      <Typography sx={{ marginTop: '40px' }} variant='body1' color="GrayText">
        Code not receive? <span onClick={onSendCode} style={{ cursor: 'pointer', color: theme.colors.text.link }}>Send again</span>
      </Typography>
    </Box>
  )
}

export { SignInStep2 } 