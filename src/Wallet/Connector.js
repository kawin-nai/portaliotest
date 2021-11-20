import React, { useEffect, useState } from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import Web3 from "web3";
import "../sass/format.scss";

function Connector(props) {
  const providerUrl = process.env.PROVIDER_URL || "http://localhost:3000";
  const [isConnecting, setIsConnecting] = useState(false);
  // useEffect(() => {
  //   const web3 = new Web3(providerUrl);

  //   let provider = window.ethereum;

  //   if (typeof window.ethereum !== "undefined") {
  //     provider
  //       .request({ method: "eth_requestAccounts" })
  //       .then((accounts) => {
  //         console.log(accounts);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  const loginHandler = async () => {
    const web3 = new Web3(providerUrl);
    let provider = window.ethereum;
    if (provider) {
      if (provider != window.ethereum) {
        console.error("Not an ethereum provider.");
      }
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(false);
    }
    props.onLogin();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div>
      <button onClick={loginHandler} className="connectbutton">
        {!isConnecting && "Connect to Metamask"}
        {isConnecting && "Connecting"}
      </button>
    </div>
  );
}

export default Connector;
