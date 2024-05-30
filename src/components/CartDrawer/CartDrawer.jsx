import React from 'react';
import { useCart } from '../../context/CartContext';
import { Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider } from '@mui/material';
import './CartDrawer.css';

const CartDrawer = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0).toFixed(2);
  };

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
      <div className="cart-drawer">
        <h2>Tu Carrito</h2>
        <List>
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
                <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </ListItem>
            ))
          )}
        </List>
        <Divider />
        <div className="cart-summary">
          <p>Subtotal: ${calculateTotal()}</p>
          <Button variant="contained" color="primary" className="checkout-button">
            Proceder al pago
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
