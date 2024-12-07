// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.APP_APIKEY,
    authDomain: import.meta.env.APP_AUTHDOMAIN,
    projectId: import.meta.env.APP_PROJECT_ID,
    storageBucket: import.meta.env.APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.APP_MESSENGERID,
    appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);