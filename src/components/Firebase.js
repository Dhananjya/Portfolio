// Import the functions you need from the SDKs you need
import {collection,getFirestore} from '@firebase/firestore';
import'firebase/compat/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA-Z_vpVfJfdiOtJ_6ZExpVp0g_wh0b4QU",
  authDomain: "port-1101d.firebaseapp.com",
  databaseURL: "https://port-1101d-default-rtdb.firebaseio.com",
  projectId: "port-1101d",
  storageBucket: "port-1101d.appspot.com",
  messagingSenderId: "274159264287",
  appId: "1:274159264287:web:b0a2443f7726ad4d41eb2a",
  measurementId: "G-T0Q5R0PH03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const userRef=collection(db,"myinfo");

