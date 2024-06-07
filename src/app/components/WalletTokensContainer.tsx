import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import WalletTokens from "./tokens"; // Adjust the import path as necessary
import "../globals.css?v=1.0.1";

const WalletTokensContainer: React.FC = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      {publicKey ? (
        <WalletTokens publicKey={publicKey.toBase58()} />
      ) : (
        <p>Please connect your wallet to see your tokens.</p>
      )}
    </div>
  );
};

export default WalletTokensContainer;
