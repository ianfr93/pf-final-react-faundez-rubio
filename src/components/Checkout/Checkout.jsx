import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { saveOrder } from '../../services/productService';
import "./Checkout.css"; 

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', lastName: '', phone: '', email: '', confirmEmail: '' });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }
  
    const items = cart.map(item => ({
      id: item.id,
      titulo: item.titulo,
      price: item.price,
      quantity: item.quantity
    }));
  
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
    if (!items.length || isNaN(total)) {
      alert('Hay un problema con los ítems del carrito.');
      return;
    }
  
    const order = {
      user: {
        nombre: formData.name,
        apellido: formData.lastName,
        email: formData.email,
        telefono: formData.phone
      },
      items: items,
      total: total,
      fecha: new Date(),
      estado: 'generada'
    };
  
    try {
      const id = await saveOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };
  

  if (orderId) {
    return <h2>Gracias por tu compra. Tu número de orden es: {orderId}</h2>;
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} required />
        <input type="text" name="lastName" placeholder="Apellido" onChange={handleInputChange} required />
        <input type="tel" name="phone" placeholder="Teléfono" onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
        <input type="email" name="confirmEmail" placeholder="Confirmar Email" onChange={handleInputChange} required />
        <button type="submit">Realizar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
