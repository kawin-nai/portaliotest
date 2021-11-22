import React from "react";
import "../sass/format.scss";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

export default Backdrop;
