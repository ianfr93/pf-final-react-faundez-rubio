import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const { orderId } = useParams(); // Obtener orderId desde los parámetros de la URL

  return (
    <div className="order-success">
      <div className="order-success__container">
        <h1 className="order-success__title">¡Gracias por tu compra!</h1>
        <p className="order-success__message">
          Tu orden ha sido realizada con éxito. Tu número de orden es: <span className="order-success__id">{orderId}</span>
        </p>
        <Link to="/" className="order-success__link">
          <button className="order-success__button">Volver a la tienda</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
