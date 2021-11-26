import React, { useState, useEffect } from "react";
import Productcard from "../Components/Productcard";
import "../sass/format.scss";
import Form from "../Components/Form";
import { initializeApp } from "firebase/app";
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
import Productmain from "../Components/Productmain";

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
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [mainPageProps, setMainPageProps] = useState();
  const [mainPageImg, setMainPageImg] = useState("");
  const [mainPageTitle, setMainPageTitle] = useState("");
  const [mainPageDesc, setMainPageDesc] = useState("");
  const [mainPageShown, setMainPageShown] = useState(false);
  const providerUrl = process.env.PROVIDER_URL || "http://localhost:3000";

  const arr = [];
  const databasearr = [];

  const login = async () => {
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

  const mainPageHandler = (details) => {
    console.log("handler clicked", details);
    setMainPageShown(true);
  };

  const closeMainPageHandler = () => {
    setMainPageShown(false);
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
      {!isConnected && <Connector onLogin={login} onLogout={logout} />}
      {isConnected && (
        <div>
          <button className="fakeconnectbutton">Connected</button>
        </div>
      )}
      {mainPageShown && (
        <Productmain
          img={mainPageImg}
          title={mainPageTitle}
          desc={mainPageDesc}
        />
      )}
      {mainPageShown && <Backdrop onClick={closeMainPageHandler} />}
      <h2>Products</h2>
      <div className="wrapper">
        {ListOfProduct
          ? ListOfProduct.map((databasearrdetail, index) => {
              // console.log("in main", databasearrdetail);
              return (
                <Productcard
                  desc={databasearrdetail.Desc}
                  img={databasearrdetail.Image}
                  title={databasearrdetail.Title}
                  onClick={() => {
                    setMainPageImg(databasearrdetail.Image);
                    setMainPageDesc(databasearrdetail.Desc);
                    setMainPageTitle(databasearrdetail.Title);
                    mainPageHandler(databasearrdetail);
                  }}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Productpage;
