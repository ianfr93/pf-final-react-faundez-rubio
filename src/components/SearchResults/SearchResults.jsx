import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  if (results.length === 0) {
    return <h1>No se encontraron productos</h1>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Resultados de la búsqueda</h1>
      <ItemList products={results} />
    </div>
  );
};

export default SearchResults;
