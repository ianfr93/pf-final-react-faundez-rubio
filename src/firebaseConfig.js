import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiQ1yd83yhjd0jEGhkKkiIJ4WnPPVSGe0",
  authDomain: "ecommerce-react-54120-6b43a.firebaseapp.com",
  projectId: "ecommerce-react-54120-6b43a",
  storageBucket: "ecommerce-react-54120-6b43a.appspot.com",
  messagingSenderId: "476630605163",
  appId: "1:476630605163:web:e6c9583d37ed6fc146802e"
};

// Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };