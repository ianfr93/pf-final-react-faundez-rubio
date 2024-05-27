import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import '../CartIcon/CartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon({ width = '24px', height = '24px' }) {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart--container">
      <FontAwesomeIcon icon={faShoppingCart} width={width} height={height} />
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
}

export default CartIcon;
