import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "../sass/format.scss";

function Connector(props) {
  // const [isConnecting, setIsConnecting] = useState(false);

  const loginHandler = async () => {
    props.onLogin();
  };

  return (
    <div>
      <button onClick={loginHandler} className="connectbutton">
        Connect to Metamask
        {/* {!isConnecting && "Connect to Metamask"}
        {isConnecting && "Connecting"} */}
      </button>
    </div>
  );
}

export default Connector;
