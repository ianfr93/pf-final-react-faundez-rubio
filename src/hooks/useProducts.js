import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data, price: data.price || 0 }; 
      });
      setProducts(productList);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, isLoading };
};

export default useProducts;
