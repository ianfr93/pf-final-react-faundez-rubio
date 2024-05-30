import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart />
      {totalItems > 0 && (
        <span style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '5px',
          fontSize: '12px',
        }}>
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
