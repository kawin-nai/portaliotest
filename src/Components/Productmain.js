import React, { useState, useEffect } from "react";
import "../sass/mainproduct.scss";
import { ethers } from "ethers";
import { initializeApp } from "firebase/app";
import {
  Database,
  getDatabase,
  ref,
  set,
  child,
  get,
} from "@firebase/database";

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

function Productmain(props) {
  // const [minGoal, setMinGoal] = useState();
  // const [goal, setGoal] = useState();
  const [curRaised, setCurRaised] = useState();
  const [amountGiven, setAmountGiven] = useState("");
  const [address, setAddress] = useState();
  const [isInit, setIsInit] = useState(true);
  const [oldStage, setOldStage] = useState(props.stage);
  const [newMinGoal, setNewMinGoal] = useState(props.mingoal);
  const [curMinGoal, setCurMinGoal] = useState(props.mingoal);
  var provider = props.myprovider;
  var signer = props.mysigner;
  var contract = props.mycontract;

  const isInvestor = () => {
    setIsInit(false);
  };
  const isInitiator = () => {
    setIsInit(true);
  };
  const createAmountGiven = (e) => {
    setAmountGiven(e.target.value);
  };

  const createMinGoal = (e) => {
    setNewMinGoal(parseInt(e.target.value));
  };

  const pledge = async () => {
    console.log("Pledge", props.title, amountGiven);
    console.log(contract);
    // invest
    console.log(
      ethers.utils.hexlify(parseInt(amountGiven)),
      typeof ethers.utils.hexlify(parseInt(amountGiven))
    );
    const overrides = {
      // to: "0xdC5357D9BB76a57fD2a73BB8a7E60250d90E5CD0",
      value: ethers.utils.hexlify(parseInt(amountGiven)), //400,
    };

    console.log("Transaction Completed");
    const tx = await contract.contribute(props.title, overrides);
  };

  const launch = async () => {
    // init
    await contract.Launch(props.title);
    console.log("Launch");
  };

  const voteYes = async () => {
    // invest
    await contract.vote(props.title, true);
    console.log("Yes");
  };

  const voteNo = async () => {
    // invest
    await contract.vote(props.title, false);
    console.log("No");
  };

  const redeemMoney = async () => {
    // init
    // await contract.redeem(props.title, props.mingoal);
    console.log("Redeem money");
    await set(ref(db, "ProductLists/" + props.title + "/MinGoal"), newMinGoal);
    setCurMinGoal(newMinGoal);
  };

  const cancelProject = async () => {
    // invest
    await contract.cancel_project(props.title);
    console.log("Cancel project");
  };
  const testProvider = async () => {
    console.log(provider);
    console.log(signer);
    console.log(contract);
    let blockNo = await provider.getBlockNumber();
    console.log(blockNo);
  };

  const testReturnName = async () => {
    let projectAddress = await contract.return_name("Art");
    setAddress(projectAddress);
    console.log(projectAddress);
    console.log(address);
  };

  const changeStage = async () => {
    await set(ref(db, "ProductLists/" + props.title + "/Stage"), oldStage);
  };

  const increaseStage = async () => {
    // console.log(props.stage);
    setOldStage(oldStage + 1);
    changeStage();
  };

  return (
    <div className="mainpage">
      <div className="left-image">
        <img className="mainimage" src={props.img} />
      </div>
      <div className="right-content">
        <div className="camp-title">{props.title}</div>
        <div className="camp-desc">{props.desc}</div>
        <div className="camp-progress">
          <div className="progress-raised">
            <span className="total-amount">2000 HKD </span>
            <span>Raised by backer</span>
          </div>
          <div className="camp-goal">
            <span>Total Goal: {props.goal} HKD</span>
            <br />
            <span>Min Goal: {curMinGoal} HKD</span>
          </div>
        </div>
        <div className="cur-stage">
          {oldStage == 0 && <p>Project not launched</p>}
          {oldStage != 0 && <p>{oldStage}</p>}
        </div>
        <div>
          {!isInit && (
            <div className="selection-house">
              <p onClick={isInvestor} className="selection selected">
                Investor
              </p>
              <p onClick={isInitiator} className="selection">
                Initiator
              </p>
            </div>
          )}
          {isInit && (
            <div className="selection-house">
              <p onClick={isInvestor} className="selection">
                Investor
              </p>
              <p onClick={isInitiator} className="selection selected">
                Initiator
              </p>
            </div>
          )}
          {/* <button onClick={testProvider}>PrintContract</button>
          <button onClick={increaseStage}>Increase Stage</button> */}
        </div>
        <div className="bottom-four">
          {isInit && (
            <div className="initiator-section">
              <div className="redeem-area">
                <input
                  type="number"
                  onChange={createMinGoal}
                  placeholder="Next Min Goal"
                  className="min-goal-field"
                ></input>
                <button className="submit-btn cntr-btn" onClick={redeemMoney}>
                  Redeem Money
                </button>
              </div>
              <div className="contr-active">
                <div className="contribute-form">
                  <button className="submit-btn cntr-btn" onClick={launch}>
                    Launch
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isInit && (
            <div>
              <div className="contribute-section">
                <div className="contr-active">
                  <div className="contribute-form">
                    <button
                      className="submit-btn cntr-btn"
                      onClick={cancelProject}
                    >
                      Cancel Project
                    </button>
                    <input
                      type="text"
                      min="1.00"
                      className="text-field contr-input"
                      pattern="^\d+([,.][0-9]{1,2})?$"
                      placeholder="Donation Amount"
                      onChange={createAmountGiven}
                    />
                    <button className="submit-btn cntr-btn" onClick={pledge}>
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
              <div className="redeem-vote">
                <button className="vote-btn vote-cntr-btn" onClick={voteYes}>
                  Vote Yes
                </button>
                <button className="vote-btn redeem-cntr-btn" onClick={voteNo}>
                  Vote No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productmain;
