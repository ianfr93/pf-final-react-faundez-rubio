import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../Brand/Brand';
import AuthModal from '../AuthModal/AuthModal';
import CartIcon from '../CartIcon/CartIcon';
import CategoryList from '../CategoryList/CategoryList'; // Asegúrate de que esta ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleAuthModalOpen = () => {
    setAuthModalOpen(true);
  };

  const handleAuthModalClose = () => {
    setAuthModalOpen(false);
  };

  const navButtonStyles = {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    position: 'relative',
    '&:hover': {
      color: '#28A745',
      '::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: '#28A745',
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#012B65' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Brand sx={{ marginRight: 'auto' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/">Home</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/category/gamer-zone">Gamer Zone</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/category/arma-tu-pc">Arma tu PC</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/category/tiendas">Tiendas</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/category/servicios">Servicios</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/category/seguir-mi-pedido">Seguir mi pedido</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/category/contacto">Contacto</Button>
            <Button sx={navButtonStyles} color="inherit" component={Link} to="/about">About</Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Button color="inherit" onClick={handleAuthModalOpen} sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FontAwesomeIcon icon={faUser} />
              <span>Ingresar</span>
            </Button>
            <CartIcon /> {/* Añade el CartIcon aquí */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, height: '100%', backgroundColor: '#012B65', color: '#fff' }} role="presentation" onClick={toggleDrawer(false)}>
          <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
            <Brand />
          </Box>
          <CategoryList /> {/* Añade CategoryList aquí */}
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '16px', gap: '16px' }}>
            <IconButton color="inherit" component="a" href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
      <AuthModal open={authModalOpen} handleClose={handleAuthModalClose} />
    </div>
  );
}

export default NavBar;
