import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider, Typography, Box, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import './CartDrawer.css';

const CartDrawer = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart, addToCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const itemPrice = item.price || 0; 
      return acc + (item.quantity * itemPrice);
    }, 0).toFixed(2);
  };
  const total = calculateTotal();

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
      <Box className="cart-drawer">
        <Typography variant="h5" className="cart-title">Tu Carrito</Typography>
        <List className="cart-list">
          {cart.length === 0 ? (
            <ListItem>
              <ListItemText primary="Tu carrito está vacío" />
            </ListItem>
          ) : (
            cart.map((item) => (
              <ListItem key={item.id} className="cart-item">
                <ListItemAvatar>
                  <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText 
                  primary={item.titulo} 
                  secondary={`${item.quantity} x $${(item.price ? item.price.toFixed(2) : '0.00')}`} 
                />
                <Box className="cart-item-controls">
                  <IconButton onClick={() => addToCart(item, -1)}>
                    <Remove />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => addToCart(item, 1)}>
                    <Add />
                  </IconButton>
                </Box>
                <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </ListItem>
            ))
          )}
        </List>
        <Divider />
        <Box className="cart-summary">
          <Typography variant="h6">Total: ${total}</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            className="checkout-button"
            onClick={() => navigate('/checkout')}
          >
            Proceder al pago
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;

