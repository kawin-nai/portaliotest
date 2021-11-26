import React, { useState, useEffect } from "react";

function Productmain(props) {
  return (
    <div className="mainpage">
      <img className="cardimage" src={props.img} width="200" height="200" />
      <h2 className="cardtitle">{props.title}</h2>
      <p className="carddescription text-gradient">{props.desc}</p>
    </div>
  );
}

export default Productmain;
