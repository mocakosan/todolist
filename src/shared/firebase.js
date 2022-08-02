import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaSpk7H0eOjkpEF_LGygUMr4xhAPgmn3I",
  authDomain: "todolist-16978.firebaseapp.com",
  projectId: "todolist-16978",
  storageBucket: "todolist-16978.appspot.com",
  messagingSenderId: "892194015879",
  appId: "1:892194015879:web:f7f92f27fe34b516c54622",
  measurementId: "G-BYMF2KR698",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
