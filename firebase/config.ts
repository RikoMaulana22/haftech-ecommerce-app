import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfYC5svnzFRhUltH8mWy6aLYbIwTNIJpE",
  authDomain: "chat-admin-cs.firebaseapp.com",
  projectId: "chat-admin-cs",
  storageBucket: "chat-admin-cs.firebasestorage.app",
  messagingSenderId: "681382932687",
  appId: "1:681382932687:web:6017b9308e53e2b9fc47ba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
