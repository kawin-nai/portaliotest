import React from "react";
import "../sass/format.scss";

function Productcard(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="cardbody">
        <img className="cardimage" src={props.img} width="200" height="200" />
        <h2 className="cardtitle">{props.title}</h2>
        <p className="carddescription text-gradient">{props.desc}</p>
      </div>
      <button className="cardbutton">View</button>
    </div>
  );
}

export default Productcard;
