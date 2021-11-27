import React, { useState, useEffect } from "react";
import "../sass/mainproduct.scss";
function Productmain(props) {
  return (
    <div className="mainpage">
      <div className="left-image">
        <img className="cardimage" src={props.img} width="200" height="200" />
      </div>
      <div className="right-content">
        <h2 className="cardtitle">{props.title}</h2>
        <p className="carddescription text-gradient">{props.desc}</p>
        <input type="text" className="inputfield"></input>
        <br />
        <button className="connectbutton"> Pledge</button>
        <br />
      </div>
    </div>
  );
}

export default Productmain;
