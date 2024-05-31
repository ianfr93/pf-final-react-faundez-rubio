import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SearchResults from "./components/SearchResults/SearchResults";
import useProducts from "./hooks/useProducts";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import Checkout from "./components/Checkout/Checkout"; 
import Cart from './components/Cart/Cart';
import OrderSuccess from './components/Checkout/OrderSuccess/OrderSuccess'; 

function App() {
  const { products, isLoading } = useProducts();
  const location = useLocation();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <CartProvider>
      <Layout>
        {location.pathname === "/" && <ImageCarousel />}
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" products={products} />} />
          <Route path="/category/:id" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" products={products} />} />
          <Route path="/product/:id" element={<ItemDetailContainer products={products} />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/order-success/:orderId" element={<OrderSuccess />} /> 
        </Routes>
        <CartDrawer /> 
      </Layout>
    </CartProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
