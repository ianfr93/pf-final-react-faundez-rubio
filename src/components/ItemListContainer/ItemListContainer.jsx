import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/productService'; 
import './ItemListContainer.css';

function ItemListContainer({ saludo }) {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      let filtered = products;

      if (id) {
        filtered = products.filter(product => product.categoria === id);
        setCategoryTitle(getCategoryTitle(id));
      } else {
        setCategoryTitle('Todos los productos');
      }

      setFilteredProducts(sortProducts(filtered, sortOrder));
    };

    fetchProducts();
  }, [id, sortOrder]);

  const sortProducts = (products, order) => {
    switch (order) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'date-newest':
        return [...products].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
      case 'date-oldest':
        return [...products].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      default:
        return products;
    }
  };

  const getCategoryTitle = (categoryId) => {
    switch (categoryId) {
      case 'gamer-zone':
        return 'Gamer Zone';
      case 'arma-tu-pc':
        return 'Arma tu PC';
      case 'tiendas':
        return 'Tiendas';
      case 'servicios':
        return 'Servicios';
      case 'seguir-mi-pedido':
        return 'Seguir mi pedido';
      case 'contacto':
        return 'Contacto';
      default:
        return 'Todos los productos';
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  if (filteredProducts.length === 0) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '40px' }}>{saludo}</h1>
      
      <div className="filter-container">
        <label>
          Ordenar por:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="default">Relevancia</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="date-newest">Fecha: Más reciente</option>
            <option value="date-oldest">Fecha: Más antiguo</option>
          </select>
        </label>
      </div>

      <ItemList products={filteredProducts}>
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div>
              <h2>{product.titulo}</h2>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock disponible: {product.stock}</p>
              <p>Fecha: {new Date(product.fecha).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </ItemList>
    </div>
  );
}

export default ItemListContainer;
