import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { PATHS } from '../../constants'
import { useLocation, useNavigate } from 'react-router-dom'

const menu = [
  {
    id: 1,
    url: PATHS.employee,
    label: "Manage Employee "
  },

  {
    id: 2,
    url: PATHS.task,
    label: "Manage Task"
  },

  {
    id: 3,
    url: PATHS.message,
    label: "Message"
  },
]

const SideBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <Box
      className='sidebar'
      sx={{
        width: 280,
        position: 'relative',
        padding: '24px 16px',
        borderRight: '1.5px solid #f5f5f5'

      }}>
      <Box width="100%" height="50px" bgcolor="gray" />

      <List sx={{ paddingTop: '80px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {menu.map(({ id, label, url }) => (
          <ListItemButton
            key={id}
            selected={pathname === url}
            onClick={(event) => navigate(url)}
            sx={{
              '&.Mui-selected': {
                borderRadius: '0.5rem',
                color: 'blue'
              },
              '&:hover': {
                borderRadius: '0.5rem',

              }
            }}
          >

            <ListItemText primary={label} />
          </ListItemButton>

        ))}
      </List>
    </Box>
  )
}

export { SideBar }