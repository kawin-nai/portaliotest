import React, { useState, useEffect } from "react";
import Productcard from "../Components/Productcard";
import "../sass/format.scss";
import Form from "../Components/Form";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "@firebase/database";
import Connector from "../Wallet/Connector";
import Backdrop from "../Components/Backdrop";
import Productmain from "../Components/Productmain";
import { ethers } from "ethers";
import portalcontract from "../Wallet/portalcontract.json";

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
  const contractAddress = "0xdC5357D9BB76a57fD2a73BB8a7E60250d90E5CD0";
  const [ListOfProduct, setListOfProduct] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [mainPageImg, setMainPageImg] = useState("");
  const [mainPageTitle, setMainPageTitle] = useState("");
  const [mainPageDesc, setMainPageDesc] = useState("");
  const [mainPageShown, setMainPageShown] = useState(false);
  const [mainPageGoal, setMainPageGoal] = useState();
  const [mainPageMinGoal, setMainPageMinGoal] = useState();
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const login = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
          setIsConnected(true);
        });
    } else {
      console.log("Metamask not installed");
    }
  };

  const accountChangeHandler = (newaccount) => {
    setAccount(newaccount);
    updateEthers();
  };

  const updateEthers = () => {
    const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    const tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    const tempContract = new ethers.Contract(
      contractAddress,
      portalcontract,
      tempSigner
    );
    setContract(tempContract);
  };

  const addProductHandler = () => {
    setFormIsOpen(true);
  };

  const closeFormHandlerWithReload = () => {
    setFormIsOpen(false);
    window.location.reload(false);
  };

  const closeFormHandler = () => {
    setFormIsOpen(false);
  };

  const mainPageHandler = () => {
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

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {/* {getAllData()} */}
      <div className="navbar-container">
        <button className="connectbutton" onClick={addProductHandler}>
          Create Project
        </button>
        <div className="spacer"></div>
        {formIsOpen && (
          <Form onClick={closeFormHandlerWithReload} mycontract={contract} />
        )}
        {formIsOpen && <Backdrop onClick={closeFormHandler} />}
        {!isConnected && <Connector onLogin={login} />}
        {isConnected && (
          <div>
            <button className="fakeconnectbutton">{account}</button>
          </div>
        )}
      </div>
      {mainPageShown && (
        <Productmain
          img={mainPageImg}
          title={mainPageTitle}
          desc={mainPageDesc}
          goal={mainPageGoal}
          mingoal={mainPageMinGoal}
          myprovider={provider}
          mysigner={signer}
          mycontract={contract}
        />
      )}
      {mainPageShown && <Backdrop onClick={closeMainPageHandler} />}
      <h2>Projects</h2>
      <div className="wrapper">
        {ListOfProduct
          ? ListOfProduct.map((databasearrdetail) => {
              return (
                <Productcard
                  desc={databasearrdetail.Desc}
                  img={databasearrdetail.Image}
                  title={databasearrdetail.Title}
                  onClick={() => {
                    setMainPageImg(databasearrdetail.Image);
                    setMainPageDesc(databasearrdetail.Desc);
                    setMainPageTitle(databasearrdetail.Title);
                    setMainPageGoal(databasearrdetail.Goal);
                    setMainPageMinGoal(databasearrdetail.MinGoal);
                    mainPageHandler();
                  }}
                />
              );
            })
          : ""}
      </div>
      <div className="allseeing"></div>
    </div>
  );
}

export default Productpage;
