import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_HAVVA_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_HAVVA_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_HAVVA_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_HAVVA_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_HAVVA_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_HAVVA_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot };
