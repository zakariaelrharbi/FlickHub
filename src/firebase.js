// Import the necessary Firebase modules
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore compatibility
import "firebase/compat/auth"; // Import Auth compatibility

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQLorzQ3bjBopbsq4Nt1zWaN9Er1vj0cQ', 
  authDomain: "flickhub-7b35b.firebaseapp.com",
  projectId: "flickhub-7b35b",
  storageBucket: "flickhub-7b35b.appspot.com", 
  messagingSenderId: "293969060724", 
  appId: "1:293969060724:web:902ed6ad4e1bf7af150221" 
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = firebaseApp.firestore(); // This works now because Firestore is imported
const auth = firebase.auth(); // Auth works because it's imported

export { auth };
export default db;
