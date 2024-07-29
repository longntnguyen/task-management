import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const ChatList = ({ chats }) => {
  return (
    <Box className="list-chat" display="flex" flexDirection="column" gap="20px">
      <Box className="item-chat" display="flex" gap="10px" width="100%" alignItems="center" borderRadius='8px'
        padding="16px"
        bgcolor="#F8F8F8"
      >
        <Avatar sx={{ width: 56, height: 56 }}>U1</Avatar>
        <Box display="flex" flexDirection="column" gap="5px">
          <Typography variant='body1'>User1</Typography>
          <Typography variant='body1'>Hello friend</Typography>

        </Box >
      </Box>

      <Box className="item-chat" display="flex" gap="10px" width="100%" alignItems="center" borderRadius={'8px'}
        padding="8px"
        bgcolor="#F8F8F8"
      >
        <Avatar sx={{ width: 56, height: 56 }}>U2</Avatar>
        <Box display="flex" flexDirection="column" gap="5px"
          overflow="hidden"

        >
          <Typography sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }} variant='body1'>User2</Typography>
          <Typography sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }}
            variant='body1'>Hello friend</Typography>

        </Box >
      </Box>
    </Box>
  )
}

export default ChatList