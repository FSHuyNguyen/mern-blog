import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e1660.firebaseapp.com",
  projectId: "mern-blog-e1660",
  storageBucket: "mern-blog-e1660.appspot.com",
  messagingSenderId: "206647791141",
  appId: "1:206647791141:web:fcdfe9c573f1fc15b3f9cc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
  prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
