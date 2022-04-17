// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr-GDRKgOG5Q8URfPszHdXSPBuRoT2cTA",
    authDomain: "consultant-point.firebaseapp.com",
    projectId: "consultant-point",
    storageBucket: "consultant-point.appspot.com",
    messagingSenderId: "1019612990727",
    appId: "1:1019612990727:web:e4bd0c235f97eb74bec9a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;