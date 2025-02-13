import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyBw5U-Df6lfz4qkJpoxjvJE6COn-MPCibI",
    authDomain: "diabetes-88d4d.firebaseapp.com",
    projectId: "diabetes-88d4d",
    storageBucket: "diabetes-88d4d.firebasestorage.app",
    messagingSenderId: "700403927214",
    appId: "1:700403927214:web:5ddda3bb6f7eb8f5eb053f",
    measurementId: "G-7M1L8NQG9G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
