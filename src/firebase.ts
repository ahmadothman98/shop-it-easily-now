// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBodtkwdgZ1NAeToBDk98OGL4bVfmB47TM",
    authDomain: "lumine-71e1c.firebaseapp.com",
    projectId: "lumine-71e1c",
    storageBucket: "lumine-71e1c.firebasestorage.app",
    messagingSenderId: "731592970798",
    appId: "1:731592970798:web:5b3787ed21dfbb9a6f85bf"
};

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db };
