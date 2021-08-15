/** @format */

import firebase from "firebase/app";
import "firebase/auth";
import Constants from "expo-constants";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCew6cq38oe5-grpoBO2SnbkMuti7EO8IM",
  authDomain: "frenchappweb-774bd.firebaseapp.com",
  projectId: "frenchappweb-774bd",
  storageBucket: "frenchappweb-774bd.appspot.com",
  messagingSenderId: "141103471920",
  appId: "1:141103471920:web:8219e10eedc6069354bcf5",
  measurementId: "G-PKGKGQ6DEN"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
