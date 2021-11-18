import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import Web3 from "web3";

function Connector() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const handleConnectWallet = () => {
    activateBrowserWallet();
  };
  return account ? (
    <div>
      <h3>{etherBalance && etherBalance} ETH</h3>
    </div>
  ) : (
    <div>
      <button onClick={handleConnectWallet}>Connect to MetaMask</button>
    </div>
  );
}

export default Connector;
