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
import discordlogo from "../sass/Discord-Logo-Color.svg";

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
  const [curRaised, setCurRaised] = useState(props.raised);
  const [amountGiven, setAmountGiven] = useState("");
  const [address, setAddress] = useState();
  const [isInit, setIsInit] = useState(false);
  const [oldStage, setOldStage] = useState(props.stage);
  const [newMinGoal, setNewMinGoal] = useState(props.mingoal);
  const [curMinGoal, setCurMinGoal] = useState(props.mingoal);
  var teststage = oldStage;
  var testraised = curRaised;
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
    // invest
    const overrides = {
      // to: "0xdC5357D9BB76a57fD2a73BB8a7E60250d90E5CD0",
      value: ethers.utils.hexlify(parseInt(amountGiven)), //400,
    };

    await contract
      .contribute(props.title, overrides)
      .then(() => {
        console.log("Transaction Completed");
        addRaised(parseInt(amountGiven));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const addRaised = (e) => {
    testraised += e;
    setCurRaised(testraised);
    set(ref(db, "ProductLists/" + props.title + "/Raised"), testraised);
  };

  const setRaised = (e) => {
    testraised = e;
    setCurRaised(testraised);
    set(ref(db, "ProductLists/" + props.title + "/Raised"), testraised);
  };

  const launch = async () => {
    // init
    // console.log("Launch");
    await contract
      .Launch(props.title)
      .then(() => {
        console.log("Launch");
        setStage(1);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const voteYes = async () => {
    // invest
    await contract
      .vote(props.title, true)
      .then(() => {
        console.log("Yes");
        setStage(2);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const voteNo = async () => {
    // invest
    await contract
      .vote(props.title, false)
      .then(() => {
        console.log("No");
        setStage(3);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const redeemMoney = async () => {
    // init
    await contract
      .redeem(props.title, props.mingoal)
      .then(async () => {
        await set(
          ref(db, "ProductLists/" + props.title + "/MinGoal"),
          newMinGoal
        );
        setCurMinGoal(newMinGoal);
        console.log("Redeem money");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const cancelProject = async () => {
    // invest
    await contract
      .cancel_project(props.title)
      .then(() => {
        console.log("Cancel project");
        setStage(4);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const customerRedeem = async () => {
    await contract
      .customer_redeem(props.title)
      .then(() => {
        console.log("Customer Redeem Successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const testProvider = async () => {
    console.log(provider);
    console.log(signer);
    console.log(contract);
    if (provider == null) {
      alert("Please log in to Metamask");
      return;
    }
    let blockNo = await provider
      .getBlockNumber()
      .then(() => {
        console.log(blockNo);
      })
      .catch((error) => {
        alert("Something went wrong");
      });

    setStage(0);
    setRaised(0);
  };

  const setStage = (e) => {
    // console.log(props.stage);
    teststage = e;
    setOldStage(teststage);
    set(ref(db, "ProductLists/" + props.title + "/Stage"), teststage);
  };

  const increaseStage = () => {
    teststage++;
    setOldStage(teststage);
    set(ref(db, "ProductLists/" + props.title + "/Stage"), teststage);
  };

  const miscTest = () => {
    console.log(contract.return_isOpen(props.title));
  };

  return (
    <div className="mainpage">
      <div className="left-image">
        <img className="mainimage" src={props.img} />
      </div>
      <div className="right-content">
        <div className="camp-title">{props.title}</div>
        <div className="camp-desc">{props.desc}</div>
        <img
          src={discordlogo}
          width="24px"
          alt="Discord"
          className="discord-logo"
        />
        <div className="camp-progress">
          <div className="progress-raised">
            <span className="total-amount">{curRaised} HKD </span>
            <span>Raised by backer</span>
          </div>
          <div className="camp-goal">
            <span>Total Goal: {props.goal} HKD</span>
            <br />
            <span>Min Goal: {curMinGoal} HKD</span>
          </div>
        </div>
        <div className="cur-stage">
          <p>Current Stage: </p>
          {oldStage == 0 && <p>Project not launched</p>}
          {oldStage == 1 && <p>Project launched - waiting for votes</p>}
          {oldStage == 2 && <p>Voting passed - waiting for redeem</p>}
          {oldStage == 3 && <p>Voting failed - waiting for cancel</p>}
          {oldStage == 4 && <p>Project ended</p>}
        </div>
        <div>
          {!isInit && (
            <div className="selection-house">
              <p onClick={isInvestor} className="selection ">
                Investor
              </p>
              <p onClick={isInitiator} className="selection selected">
                Initiator
              </p>
            </div>
          )}
          {isInit && (
            <div className="selection-house">
              <p onClick={isInvestor} className="selection selected">
                Investor
              </p>
              <p onClick={isInitiator} className="selection ">
                Initiator
              </p>
            </div>
          )}
          {/* <button onClick={testProvider}>TestAndReset</button>
          <button onClick={increaseStage}>Increase Stage</button>
          <button onClick={miscTest}>Miscellaneous</button> */}
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
                  Redeem Fund
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
                      Cancel
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
                <button
                  className="vote-btn redeem-btn"
                  onClick={customerRedeem}
                >
                  Redeem
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
