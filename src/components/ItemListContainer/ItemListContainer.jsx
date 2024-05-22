import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ saludo, products }) {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if (id) {
      const filtered = products.filter(product => product.categoria === id);
      setFilteredProducts(filtered);
      setCategoryTitle(getCategoryTitle(id));
    } else {
      setFilteredProducts(products);
      setCategoryTitle('Todos los productos');
    }
  }, [id, products]);

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

  if (filteredProducts.length === 0) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '40px' }}>{saludo}</h1>
   
      <ItemList products={filteredProducts}>
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}> {/* Asegúrate de que el enlace use '/product' */}
            <div>
              <h2>{product.titulo}</h2>
              <p>{product.descripcion}</p>
              <p>Precio: ${product.precio}</p>
              <p>Stock disponible: {product.stock}</p>
            </div>
          </Link>
        ))}
      </ItemList>
    </div>
  );
}

export default ItemListContainer;