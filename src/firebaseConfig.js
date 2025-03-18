
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBu8akAR2liLMQtPLIpq87M_eb8wum8SRU",
  authDomain: "bf-sportswear.firebaseapp.com",
  projectId: "bf-sportswear",
  storageBucket: "bf-sportswear.firebasestorage.app",
  messagingSenderId: "261205572286",
  appId: "1:261205572286:web:2bb7893c9318266980fcef"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

