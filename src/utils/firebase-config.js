// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAX7ltoGSL857MDfeYi-pEVOI2KlLhVQ1U",
  authDomain: "netflix-clone-react-947a7.firebaseapp.com",
  projectId: "netflix-clone-react-947a7",
  storageBucket: "netflix-clone-react-947a7.appspot.com",
  messagingSenderId: "611245778880",
  appId: "1:611245778880:web:c7271fd35ff1d093ae8a25",
  measurementId: "G-LRJY9510HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);