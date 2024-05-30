import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
        {totalItems > 0 && <span className="cart-widget__badge">{totalItems}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;
