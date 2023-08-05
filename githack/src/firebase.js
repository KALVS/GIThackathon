// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG8HPzooGlXaYKvotY0ReI2Fs4eDpcF34",
  authDomain: "greentrybe-fe6b3.firebaseapp.com",
  projectId: "greentrybe-fe6b3",
  storageBucket: "greentrybe-fe6b3.appspot.com",
  messagingSenderId: "144185377824",
  appId: "1:144185377824:web:18626960fbd0a69fc56845",
  measurementId: "G-Z7XQ95X3V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
