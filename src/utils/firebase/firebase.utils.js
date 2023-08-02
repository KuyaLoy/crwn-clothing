import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBleZxE9_7A6wPpohOyM9rxHwDRA4gPajo",
  authDomain: "crwn-clothing-db-7642d.firebaseapp.com",
  projectId: "crwn-clothing-db-7642d",
  storageBucket: "crwn-clothing-db-7642d.appspot.com",
  messagingSenderId: "28850624035",
  appId: "1:28850624035:web:c8d2f5c56a84dacdb30396",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
