import { Box, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';

const ChatContent = ({ messages }) => {
  const [inputValue, setInputValue] = useState("")
  const onEnterMessage = () => {
    console.log("Enter message", inputValue)
  }
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between"
      borderRadius='8px'
      padding="16px"
      height="calc(100vh - 112px)"
      bgcolor="#F8F8F8">


      <Box>
        Messages
      </Box>

      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        variant="standard"
        onKeyDown={e => e.key === "Enter" && onEnterMessage()}
        InputProps={{
          endAdornment: <InputAdornment sx={{ cursor: "pointer" }} onClick={onEnterMessage} position="end"><SendIcon /></InputAdornment>
        }}
      />

    </Box>
  )
}

export default ChatContent