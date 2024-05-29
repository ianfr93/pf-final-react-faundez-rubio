import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartIcon from 'components/CartIcon/CartIcon'; 

import './CartWidget.css'; 

function CartWidget() {
  const { cart, isCartOpen, toggleCart, removeFromCart } = useContext(CartContext);

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-widget" onClick={e => e.stopPropagation()}>
        <h2>Tu Carrito</h2>
        <button onClick={toggleCart}>Cerrar</button>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CartWidget;
