import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAs9hyTP3w2H03IMLbuiP0IC0AKFXiWduQ",
    authDomain: "e-shop-ebca9.firebaseapp.com",
    projectId: "e-shop-ebca9",
    storageBucket: "e-shop-ebca9.appspot.com",
    messagingSenderId: "1028942230046",
    appId: "1:1028942230046:web:e4b57fa245dc25293cf40f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };