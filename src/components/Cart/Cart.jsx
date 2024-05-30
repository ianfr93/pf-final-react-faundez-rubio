import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-summary">
            <h2>Total: ${totalAmount}</h2>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout"><button>Proceder al Pago</button></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
