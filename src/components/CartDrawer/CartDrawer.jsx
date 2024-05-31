import React from 'react';
import { useCart } from '../../context/CartContext';
import { Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider, Typography, Box, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import './CartDrawer.css';

const CartDrawer = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart, addToCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0).toFixed(2);
  };

  const calculateTaxes = (total) => (total * 0.19).toFixed(2);
  const calculateShipping = (total) => (total > 100 ? 0 : 5).toFixed(2);
  const calculateFinalTotal = (total, taxes, shipping) => (parseFloat(total) + parseFloat(taxes) + parseFloat(shipping)).toFixed(2);

  const total = calculateTotal();
  const taxes = calculateTaxes(total);
  const shipping = calculateShipping(total);
  const finalTotal = calculateFinalTotal(total, taxes, shipping);

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
                  secondary={`${item.quantity} x $${(item.price || 0).toFixed(2)}`} 
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
          <Typography variant="h6">Subtotal: ${total}</Typography>
          <Typography variant="body2">Impuestos: ${taxes}</Typography>
          <Typography variant="body2">Envío: ${shipping}</Typography>
          <Typography variant="h6">Total: ${finalTotal}</Typography>
          <Button variant="contained" color="primary" className="checkout-button">
            Proceder al pago
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
