// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEmyEBbg1I-QQUIUx4iWAYcNdDvXVVrpQ",
  authDomain: "skillsight-2079d.firebaseapp.com",
  projectId: "skillsight-2079d",
  storageBucket: "skillsight-2079d.firebasestorage.app",
  messagingSenderId: "667711665860",
  appId: "1:667711665860:web:6faf998bfd401e2b66bb91",
  measurementId: "G-R4D6GZMZ3S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);