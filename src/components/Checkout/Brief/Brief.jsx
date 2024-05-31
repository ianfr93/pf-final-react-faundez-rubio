import React from 'react';
import './Brief.css'; 

const Brief = ({ order }) => {
  return (
    <div className="brief">
      <h2>Resumen de tu compra</h2>
      <div className="brief__info">
        <h3>Artículos</h3>
        <ul>
          {order.items.map(item => (
            <li key={item.id}>
              {item.titulo} - {item.quantity} x ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Comprador</h3>
        <p>Nombre: {order.user.nombre} {order.user.apellido}</p>
        <p>Email: {order.user.email}</p>
        <p>Teléfono: {order.user.telefono}</p>
        <h3>Total</h3>
        <p>${order.total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Brief;
