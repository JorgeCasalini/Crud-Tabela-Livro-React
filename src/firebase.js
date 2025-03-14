import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAgPT93mODRh4FNCnJCGE1hww9TbuEe830",
    authDomain: "crud-react-casalini-f36b0.firebaseapp.com",
    projectId: "crud-react-casalini-f36b0",
    storageBucket: "crud-react-casalini-f36b0.appspot.com",
    messagingSenderId: "970280699468",
    appId: "1:970280699468:web:1bd84231b489bdf0f116e9"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  
  export { app, auth, database };
