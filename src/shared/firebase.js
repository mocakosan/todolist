import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaSpk7H0eOjkpEF_LGygUMr4xhAPgmn3I",
  authDomain: "todolist-16978.firebaseapp.com",
  projectId: "todolist-16978",
  storageBucket: "todolist-16978.appspot.com",
  messagingSenderId: "892194015879",
  appId: "1:892194015879:web:f7f92f27fe34b516c54622",
  measurementId: "G-BYMF2KR698",
  databaseURL: "https://todolist-16978-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const database = getDatabase(app);
export const dbService = firebase.firestore();
