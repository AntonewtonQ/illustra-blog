// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM1WMa8o1HowQOqiPAS9ia5InyckGRA-Y",
  authDomain: "illustrablog-db.firebaseapp.com",
  projectId: "illustrablog-db",
  storageBucket: "illustrablog-db.firebasestorage.app",
  messagingSenderId: "992365338539",
  appId: "1:992365338539:web:b86f5d6ee14e5ad1c0fcee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();