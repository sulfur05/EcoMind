// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALUTNWRrADXZTWSzbRek8rlzDZoBEnnoY",
  authDomain: "chatroom-65608.firebaseapp.com",
  projectId: "chatroom-65608",
  storageBucket: "chatroom-65608.appspot.com",
  messagingSenderId: "722251707445",
  appId: "1:722251707445:web:358471bcc6332705042d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app);