import { AppBar, Box, Toolbar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'

export const AuthNavbar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#04061A'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <ArrowBackIcon />
            <Box>
                <img alt="Remy Sharp" src="/public/LOGO.png" style={{ width: '135px'}}/>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
