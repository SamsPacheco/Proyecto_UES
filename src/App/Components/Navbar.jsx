import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid2, Menu } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import GoogleIcon from '@mui/icons-material/Google';

const settings = ['Account', 'Logout'];

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    
  <AppBar position="static" sx={{ backgroundColor: '#04061A', borderRadius: '0 0 30px 30px'  }}>
    <Container
      sx={{
        backgroundColor: '#04061A',
        opacity: 0.95,
        height: { md: '410px', xs: 'auto' }, // Establece la altura según el tamaño de pantalla
        borderRadius: {md: '0 0 30px 30px', xs: '0 0 10px 10px'} 
      }}
      maxWidth="xl"
    >
      <Toolbar disableGutters>

        {/* te ayudamos... */}
        
        <Typography
          variant="h3"
          maxWidth="550px"
          align='center'
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            mt: "180px",
            ml: '50px',
            fontFamily: 'roboto',
            fontWeight: 'bold',
            color: 'inherit',
          }}
        >
          Te ayudamos a encontrar tu primer empleo
        </Typography>

        {/* btns login && publicar oferta */}
        <Grid2 container 
          sx={{
            display:{
              xs: 'none',
              md: 'flex',
              justifyContent: 'space-between'
            },
            padding: '10px',
            position: 'absolute', 
            top: 15,
            gap: 3,
            width: '100%',            
          }}
        >
          
          <Box sx={{ width: '190px' }}>
            <img alt="Remy Sharp" src="/public/LOGO.png" style={{ width: 'inherit'}}/>
          </Box>

          <Box>
            <Button variant='contained' sx={{ backgroundColor: '#1AD361', width: '230px', height: '50px', fontSize:'medium',  fontWeight: 'bold', borderRadius: '10px' }} endIcon={<WorkIcon size="large" />}>
                Publicar Oferta
            </Button>

            <Button variant='contained' sx={{ ml: '14px', backgroundColor: '#1AD361', width: '230px', height: '50px', fontSize:'medium', fontWeight: 'bold', borderRadius: '10px' }} endIcon={<GoogleIcon size="large" />}>
                Iniciar Sesion    
            </Button>
          </Box>

        </Grid2>

        {/* minerva */}
        <Box sx={{ position: 'absolute', right: 10, bottom: -90, display: { xs: 'none', md: 'flex' } }}>
          <img src="public/minerva.png" alt="" />
        </Box>


        {/* icono de hamburgesa */}
        <Box sx={{ flexGrow: 1, display:{ xs: 'flex', md:'none' } }} >
          <IconButton
            size='large'
            aria-label='menu'
            aria-haspopup='true'
            color='inherit'
            onClick={handleOpenNavMenu}>
            <MenuIcon />
            </IconButton>

        </Box>

        {/* LOGO small */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img alt="Remy Sharp" src="/public/LOGO.png" style={{ width: '120px'}}/>
        </Box>

        {/* menu del usuario */}
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <Tooltip title="Settings user">
            <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 35, height: 35 }}/>
            </IconButton>
          </Tooltip>
          <Menu 
            sx={{mt: '45px'}}
            id="simple-menu"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>

      </Toolbar>
    </Container>
  </AppBar>

  )
}
