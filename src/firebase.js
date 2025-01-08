import firebase from 'firebase';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "flickhub-7b35b.firebaseapp.com",
  projectId: "flickhub-7b35b",
  storageBucket: "flickhub-7b35b.firebasestorage.app",
  messagingSenderId: "293969060724",
  appId: "1:293969060724:web:902ed6ad4e1bf7af150221"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;