import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAJtJ7rd9_xPgMzan-Yaibz18kKwe3xQ-k",
    authDomain: "nisse-red.firebaseapp.com",  
    databaseURL: "https://nisse-red-default-rtdb.firebaseio.com",  
    projectId: "nisse-red",  
    storageBucket: "nisse-red.appspot.com",  
    messagingSenderId: "127762297744",  
    appId: "1:127762297744:web:603b3242ff66c0f462f915"  
};

initializeApp(firebaseConfig);

const auth = getAuth();

export {
    auth
};
  