import React from 'react';
import './CartItem.css';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.imagen} alt={item.titulo} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-title">{item.titulo}</p>
        <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
