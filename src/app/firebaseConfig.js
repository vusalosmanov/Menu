// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDewdjcAqNNnv4TTJoMqF2E2u3gAyvEnTk",
    authDomain: "restoranmenu-5fa1d.firebaseapp.com",
    projectId: "restoranmenu-5fa1d",
    storageBucket: "restoranmenu-5fa1d.firebasestorage.app",
    messagingSenderId: "410794433023",
    appId: "1:410794433023:web:5d5fae94b93706fba7efca",
    measurementId: "G-BNF2FWRPWW"
  };

// Firebase tətbiqini başlat
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);