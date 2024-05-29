import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export { getProducts };