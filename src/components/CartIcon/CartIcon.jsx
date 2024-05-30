import React from 'react';
import { useCart } from '../../context/CartContext';
import { ReactComponent as CartSVG } from '../../assets/cart.svg';
import './CartIcon.css';

const CartIcon = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart--container">
      <CartSVG className="cart-icon-svg" />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;
