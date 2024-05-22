import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProducts } from '../../mock/asyncMock'; 
import './CategoryBar.css';

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products);
      const uniqueCategories = [...new Set(products.map(product => product.categoria))];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleSearch = () => {
    const filteredProducts = products.filter(product => 
      product.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    );
    navigate('/search', { state: { results: filteredProducts } });
  };

  return (
    <div className="category-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="category-search"
        />
        <button onClick={handleSearch} className="search-button">Buscar</button>
      </div>
      <ul className="category-list">
        <li>
          <Link to="/">Todos los productos</Link>
        </li>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBar;
