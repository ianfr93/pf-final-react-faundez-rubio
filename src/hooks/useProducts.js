import React, { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncMock";

export default function useProducts(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showSaludo, setShowSaludo] = useState(false); // Estado para controlar la visibilidad del saludo
  
    useEffect(() => {
      getProducts()
        .then((data) => {
          setProducts(data);
          setShowSaludo(true); // Mostrar el saludo después de cargar los productos
        })
        .catch((error) => console.error("Error al obtener productos:", error))
        .finally(() => setIsLoading(false));
    }, []);

  return { products, isLoading };
}