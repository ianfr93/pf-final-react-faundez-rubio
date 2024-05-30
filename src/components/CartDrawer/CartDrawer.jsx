import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <div>
          <h2>Tu carrito está vacío</h2>
          <Link to="/">Volver a la tienda</Link>
        </div>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.quantity} x ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${totalAmount}</h2>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button>Proceder al Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
