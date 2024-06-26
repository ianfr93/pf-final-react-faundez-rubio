import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/productService';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(`Obteniendo producto con ID: ${id}`); 
      getProductById(id)
        .then((data) => {
          console.log("Producto obtenido:", data); 
          setProduct(data);
        })
        .catch((error) => {
          console.error("Error al obtener producto:", error);
          setProduct(null); 
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) return <div>Cargando...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
