import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { BrowserRouter } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByQWcijM778LTJf2B0jdv87BZjmi1cW1g",
  authDomain: "portal-be7b2.firebaseapp.com",
  projectId: "portal-be7b2",
  storageBucket: "portal-be7b2.appspot.com",
  messagingSenderId: "468751414945",
  appId: "1:468751414945:web:c857565878d1a07e7262e0",
  measurementId: "G-PQGDMPGJMR",
  databaseURL:
    "https://portal-be7b2-default-rtdb.asia-southeast1.firebasedatabase.app",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyD_6ykkdQfcTm5cTTc1-56bFJ0A91SGKoY",
//   authDomain: "portal-f6e77.firebaseapp.com",
//   projectId: "portal-f6e77",
//   storageBucket: "portal-f6e77.appspot.com",
//   messagingSenderId: "532690869478",
//   appId: "1:532690869478:web:473d7d3e89b0e79318ef27",
//   measurementId: "G-B8QX656VNX",
//   databaseURL:
//     "https://portal-f6e77-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
