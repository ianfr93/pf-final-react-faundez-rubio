import React from 'react';
import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartIcon.css';

const CartIcon = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart--container">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      <span className="cart-text">Mi Carro</span> {/* Añadido */}
    </div>
  );
};

export default CartIcon;
