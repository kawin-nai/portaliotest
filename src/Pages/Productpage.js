import React, { useState } from "react";
import Productcard from "../Components/Productcard";
import "../sass/format.scss";
import Form from "../Components/Form";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  Database,
  getDatabase,
  ref,
  set,
  child,
  get,
} from "@firebase/database";
import { MetaMaskProvider } from "metamask-react";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const dbref = ref(getDatabase());
const userId = "";
get(child(dbref, `ProductLists/${userId}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

function Productpage() {
  return (
    <div>
      <div className="topbar">
        <Form />
      </div>
      <h2>Products</h2>
      <div className="wrapper">
        <Productcard
          img="https://images.unsplash.com/photo-1637008336770-b95d637fd5fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80"
          title="Test"
          desc="This is a test description "
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
        <Productcard
          img="https://images.unsplash.com/photo-1637002058121-7f3fde498f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Cookies"
          desc="This is a cookie"
        />
      </div>
    </div>
  );
}

export default Productpage;
