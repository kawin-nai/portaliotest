import React, { useState, useEffect } from "react";
import "../sass/mainproduct.scss";
import { ethers } from "ethers";

function Productmain(props) {
  // const [minGoal, setMinGoal] = useState();
  // const [goal, setGoal] = useState();
  const [curRaised, setCurRaised] = useState();
  const [amountGiven, setAmountGiven] = useState("");
  const [address, setAddress] = useState();
  const [isInit, setIsInit] = useState(true);
  // const [contract, setContract] = useState(null);
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
    await contract.redeem(props.title, props.mingoal);
    console.log("Redeem money");
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
    // let testvar =
    // await contract.createProject(props.title, "wowowow", props.goal, props.mingoal);
  };

  const testReturnName = async () => {
    let projectAddress = await contract.return_name("Art");
    setAddress(projectAddress);
    console.log(projectAddress);
    console.log(address);
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
            <span>Min Goal: {props.mingoal} HKD</span>
          </div>
        </div>
        <div className="selection">
          <button onClick={isInvestor}>Investor</button>
          <button onClick={isInitiator}>Initiator</button>
          <button onClick={testProvider}>PrintContract</button>
        </div>
        <div className="bottom-four">
          {!isInit && (
            <div className="contribute-section">
              <div className="contr-active">
                <div className="contribute-form">
                  <button className="submit-btn cntr-btn" onClick={redeemMoney}>
                    Redeem Money
                  </button>
                  <button className="submit-btn cntr-btn" onClick={launch}>
                    Launch
                  </button>
                </div>
              </div>
            </div>
          )}

          {isInit && (
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
