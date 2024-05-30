import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Si `cart` es undefined, manejar el error
  if (!cart) {
    console.error("El carrito no está definido");
    return null;
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <span>Carrito: {totalItems} items</span>
    </div>
  );
};

export default CartWidget;
