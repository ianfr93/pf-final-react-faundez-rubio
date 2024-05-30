import React, { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'cart'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCart(items);
    };

    fetchCartItems();
  }, []);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isCartOpen,
    toggleCart,
    totalAmount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
