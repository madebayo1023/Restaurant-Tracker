import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


var firebaseConfig = {


    apiKey: "AIzaSyD4A2Wpxskl8MHUd-yDp6f-YAF5J-ngQBU",
    authDomain: "food-diary-cs222.firebaseapp.com",
    projectId: "food-diary-cs222",
    storageBucket: "food-diary-cs222.appspot.com",
    messagingSenderId: "100658499536",
    appId: "1:100658499536:web:f4fb65dacd59f8ecbbf3d5",
    measurementId: "G-0E99K789RH"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
// const firesto

export default app;