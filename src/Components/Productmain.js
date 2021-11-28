import React, { useState, useEffect } from "react";
import "../sass/mainproduct.scss";
function Productmain(props) {
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
          </div>
        </div>
        <p></p>
        <div className="contribute-section">
          <div className="contr-active">
            <form className="contribute-form">
              <input
                type="text"
                min="1.00"
                class="text-field contr-input"
                pattern="^\d+([,.][0-9]{1,2})?$"
                placeholder="Donation Amount"
              />
              <input
                type="submit"
                class="submit-btn cntr-btn"
                value="Contribute"
              />
            </form>
          </div>
        </div>
        <div className="redeem-vote">
          <button class="vote-btn vote-cntr-btn">Vote</button>
          <button class="vote-btn vote-cntr-btn">Redeem</button>
        </div>
      </div>
    </div>
  );
}

export default Productmain;
