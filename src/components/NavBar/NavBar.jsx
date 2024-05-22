import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AppBar, Toolbar, IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from '../Brand/Brand';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="navbar__wrapper">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Brand />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <CategoryList />
          </Box>
          <Box className="right-items">
            <li className="login-item">
              <Link to="/login" className="login-link">
                <FontAwesomeIcon icon={faGoogle} className="user-icon" />
                <span>Ingresar</span>
              </Link>
            </li>
            <CartWidget />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <CategoryList />
        </Box>
      </Drawer>
    </div>
  );
}

export default NavBar;
