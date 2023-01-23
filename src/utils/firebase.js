// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn21Hh6yAwfRuLYmBcVCu45CyCoRjM_tU",
  authDomain: "auth-test-1bcc9.firebaseapp.com",
  projectId: "auth-test-1bcc9",
  storageBucket: "auth-test-1bcc9.appspot.com",
  messagingSenderId: "468365124244",
  appId: "1:468365124244:web:57786110bc134cdf470a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// Log In with Email and Password
const logInWithEmailAndPassword = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
        console.log(email);
        console.log(password);
    } catch (err) {
        console.error(err)
        
    }
};

// reset pwd flow
const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    logInWithEmailAndPassword,
    sendPasswordReset,
    logout
}