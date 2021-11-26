import React, { useState, useEffect } from "react";
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
import Connector from "../Wallet/Connector";
import Web3 from "web3";
import Backdrop from "../Components/Backdrop";
import data from "./data.json";

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
const db = getDatabase();
const dbRef = ref(db);

function Productpage() {
  const [ListOfProduct, setListOfProduct] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [formIsOpen, setFormIsOpen] = useState(false);
  const providerUrl = process.env.PROVIDER_URL || "http://localhost:3000";

  const arr = [];
  const databasearr = [];

  const login = async () => {
    // const web3 = new Web3(providerUrl);
    // const accounts = await web3.eth.getAccounts();
    // if (accounts.length === 0) {
    //   console.log("Please connect to MetaMask");
    // } else if (accounts[0] !== currentAccount) {
    //   setCurrentAccount(accounts[0]);

    // }
    setIsConnected(true);
  };

  const logout = () => {
    setIsConnected(false);
  };

  const addProductHandler = () => {
    setFormIsOpen(true);
  };

  const closeFormHandler = () => {
    setFormIsOpen(false);
  };

  const getAllData = () => {
    get(child(dbRef, "ProductLists")).then((snapshot) => {
      var allproducts = [];

      snapshot.forEach((childSnapshot) => {
        allproducts.push(childSnapshot.val());
      });

      setListOfProduct(allproducts);
    });
  };

  window.onload = getAllData;

  return (
    <div>
      <div className="topbar">
        <button className="connectbutton" onClick={addProductHandler}>
          Add Product
        </button>
        {formIsOpen && <Form onClick={closeFormHandler} />}
        {formIsOpen && <Backdrop onClick={closeFormHandler} />}
      </div>
      {!isConnected && (
        <Connector
          onLogin={login}
          onLogout={logout}
          // loginState={getLoginState}
        />
      )}
      {isConnected && (
        <div>
          <p>Connected</p>
          <button onClick={logout} className="connectbutton">
            Log out
          </button>
        </div>
      )}
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
        {ListOfProduct
          ? ListOfProduct.map((databasearrdetail, index) => {
              // console.log("in main", databasearrdetail);
              return (
                <Productcard
                  desc={databasearrdetail.Desc}
                  img={databasearrdetail.Image}
                  title={databasearrdetail.Title}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Productpage;
