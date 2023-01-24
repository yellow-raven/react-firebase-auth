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
import firebaseConfig from "./firebaseConfig.json"

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