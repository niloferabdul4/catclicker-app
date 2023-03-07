
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3naje8TD1OjF4Qx1kZ4UqDrhG83twiqI",
    authDomain: "cat-clicker-app.firebaseapp.com",
    projectId: "cat-clicker-app",
    storageBucket: "cat-clicker-app.appspot.com",
    messagingSenderId: "562943148753",
    appId: "1:562943148753:web:ef52f40b767afafe8c3bf0"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);     // initialize app with firebaseConfig //
//const analytics = getAnalytics(app);
export const db=getFirestore(app)                    // inialize database
export const storage=getStorage();
