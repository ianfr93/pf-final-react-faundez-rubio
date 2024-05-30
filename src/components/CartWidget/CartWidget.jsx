import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartIcon from '../CartIcon/CartIcon';
import CartDrawer from '../CartDrawer/CartDrawer';
import './CartWidget.css';

const CartWidget = () => {
  const { cart, toggleCart } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
    toggleCart();
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    toggleCart();
  };

  return (
    <div className="cart-widget">
      <div onClick={handleDrawerOpen}>
        <CartIcon />
      </div>
      <CartDrawer isOpen={isDrawerOpen} toggleDrawer={handleDrawerClose} />
    </div>
  );
};

export default CartWidget;
