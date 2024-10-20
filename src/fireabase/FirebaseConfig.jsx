// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsA3XQkyEDUPjFJw7vMVmbiIiFNil2cSU",
  authDomain: "reactecom-acce9.firebaseapp.com",
  projectId: "reactecom-acce9",
  storageBucket: "reactecom-acce9.appspot.com",
  messagingSenderId: "599015566825",
  appId: "1:599015566825:web:ce454ecbcce2de264b2f78",
  measurementId: "G-X0LPJPKGES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}


