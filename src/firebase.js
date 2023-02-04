// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWCPdKslKYXCyYVh0boXOpVPfd90iaf2Q",
  authDomain: "airbus-clone.firebaseapp.com",
  projectId: "airbus-clone",
  storageBucket: "airbus-clone.appspot.com",
  messagingSenderId: "134102850858",
  appId: "1:134102850858:web:28721251c54e9bd1e1d253",
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth , provider , db };
