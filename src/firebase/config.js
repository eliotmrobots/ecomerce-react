import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyD9OmsqVArrNAEmpb3Qb01LUTCwm3uSIck",
  authDomain: "proyectocoderreact-b76f6.firebaseapp.com",
  projectId: "proyectocoderreact-b76f6",
  storageBucket: "proyectocoderreact-b76f6.firebasestorage.app",
  messagingSenderId: "894646934832",
  appId: "1:894646934832:web:af9ea16bf762ad4e38fcf5"
};

// Inicializar Firebase solo si no existe
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Exportar Firestore
export const db = getFirestore(app);
