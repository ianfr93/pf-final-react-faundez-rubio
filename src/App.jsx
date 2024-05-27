import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SearchResults from "./components/SearchResults/SearchResults";
import useProducts from "./hooks/useProducts";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel"; 
import { CartProvider } from './context/CartContext'; 

function App() {
  const { products, isLoading } = useProducts();
  const location = useLocation();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <Layout>
      {location.pathname === "/" && <ImageCarousel />} {/* Solo muestra el carrusel en la ruta principal */}
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" products={products} />} />
        <Route path="/category/:id" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" products={products} />} />
        <Route path="/product/:id" element={<ItemDetailContainer products={products} />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Layout>
  );
}

function AppWrapper() {
  return (
    <Router>
      <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
        <App />
      </CartProvider>
    </Router>
  );
}

export default AppWrapper;
