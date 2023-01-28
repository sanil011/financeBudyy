import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC82mrQDxanKwpYFHrgb2y7lxfZpPK1VAw",
    authDomain: "financebudy-1a258.firebaseapp.com",
    projectId: "financebudy-1a258",
    storageBucket: "financebudy-1a258.appspot.com",
    messagingSenderId: "600088813760",
    appId: "1:600088813760:web:1ec0654fd5a42e47ad8d25"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app);
