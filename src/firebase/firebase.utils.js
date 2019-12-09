import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDSry_yyKKVHE8KisvbmEH_eTQqO7KUPX8",
  authDomain: "crwn-dp.firebaseapp.com",
  databaseURL: "https://crwn-dp.firebaseio.com",
  projectId: "crwn-dp",
  storageBucket: "crwn-dp.appspot.com",
  messagingSenderId: "905518518749",
  appId: "1:905518518749:web:de8f6af166bafc20ac6634",
  measurementId: "G-EL8H6LBN2C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
const firestore = firebase.firestore();

const providor = new firebase.auth.GoogleAuthProvider();
providor.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(providor);

export default firebase;
