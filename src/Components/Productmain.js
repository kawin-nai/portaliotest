import React, { useState, useEffect } from "react";
import "../sass/mainproduct.scss";
import { ethers } from "ethers";

function Productmain(props) {
  const [minGoal, setMinGoal] = useState();
  const [goal, setGoal] = useState();
  const [curRaised, setCurRaised] = useState();
  const [amountGiven, setAmountGiven] = useState();
  var provider = props.myprovider;
  var signer = props.mysigner;
  var contract = props.mycontract;

  const pledge = (e) => {
    setAmountGiven(e.target.value);
  };

  const testProvider = () => {
    console.log(provider);
    console.log(signer);
    console.log(contract);
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
            <span>Total Goal: 10000 HKD</span>
            <br />
            <span>Min Goal: 2500 HKD</span>
          </div>
        </div>
        <div className="contribute-section">
          <div className="contr-active">
            <div className="contribute-form">
              <input
                type="text"
                min="1.00"
                className="text-field contr-input"
                pattern="^\d+([,.][0-9]{1,2})?$"
                placeholder="Donation Amount"
                onChange={pledge}
              />
              <button
                className="submit-btn cntr-btn"
                onClick={() => console.log(amountGiven)}
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
        <div className="redeem-vote">
          <button
            className="vote-btn vote-cntr-btn"
            onClick={() => {
              console.log(provider);
            }}
          >
            Vote
          </button>
          <button className="vote-btn vote-cntr-btn" onClick={testProvider}>
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productmain;
