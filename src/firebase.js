import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "flickhub-7b35b.firebaseapp.com",
  projectId: "flickhub-7b35b",
  storageBucket: "flickhub-7b35b.appspot.com", 
  messagingSenderId: "293969060724", 
  appId: "1:293969060724:web:902ed6ad4e1bf7af150221" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
