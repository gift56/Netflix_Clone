// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqCrvTK_5bxurIt9sDHuHGfLdE9ln6iV4",
  authDomain: "netflix-react-py.firebaseapp.com",
  projectId: "netflix-react-py",
  storageBucket: "netflix-react-py.appspot.com",
  messagingSenderId: "639456403277",
  appId: "1:639456403277:web:2a68fc326b3d0afe6aa104",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
