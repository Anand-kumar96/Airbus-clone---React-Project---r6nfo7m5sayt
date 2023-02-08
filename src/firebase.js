// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7aeCzmZ046KuXuFxio5QZ6ssBhPcByCQ",
  authDomain: "plane-20960.firebaseapp.com",
  projectId: "plane-20960",
  storageBucket: "plane-20960.appspot.com",
  messagingSenderId: "181039640899",
  appId: "1:181039640899:web:3065b0cb3669fc198bbff6",
  // measurementId: "G-SFD02RZ3JF"
  }; 
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };
