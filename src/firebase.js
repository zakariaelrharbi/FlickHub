import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  authDomain: "flickhub-7b35b.firebaseapp.com", // Hard-coded
  projectId: "flickhub-7b35b", // Hard-coded
  storageBucket: "flickhub-7b35b.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "293969060724", // Hard-coded
  appId: "1:293969060724:web:902ed6ad4e1bf7af150221" // Hard-coded
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
