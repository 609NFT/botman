import React, { useState, useEffect, useCallback } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

// Adjust the RPC URL and Token Mint Address as needed
const RPC_URL =
  "https://mainnet.helius-rpc.com/?api-key=941f3ede-47ac-4d77-8ac4-b20df5d16b73";
const TOKEN_MINT_ADDRESS = "2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK";

declare global {
  interface Window {
    solana: any;
  }
}

const WalletAndTokenChecker: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const checkTokenBalance = useCallback(async (publicKey: PublicKey) => {
    const connection = new Connection(RPC_URL, "confirmed");
    const tokenMintAddress = new PublicKey(TOKEN_MINT_ADDRESS);

    try {
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        { mint: tokenMintAddress }
      );
      let totalBalance = 0;
      tokenAccounts.value.forEach((account) => {
        const balance = account.account.data.parsed.info.tokenAmount.uiAmount;
        totalBalance += balance;
      });

      if (totalBalance > 1) {
        alert("Great, you have enough tokens.");
      } else {
        // Alert the user if the total balance is 1 or less
        alert("Not enough tokens to access. Go buy Botman.");
      }
    } catch (error) {
      console.error("Failed to fetch token balance:", error);
    }
  }, []);

  const connectWallet = useCallback(async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        await checkTokenBalance(response.publicKey);
      } else {
        alert("Solana wallet not found. Please install Phantom.");
      }
    } catch (error) {
      console.error("Error connecting to the wallet:", error);
    }
  }, [checkTokenBalance]);

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  return (
    <div>
      {!walletAddress ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Wallet Connected: {walletAddress}</p>
      )}
    </div>
  );
};

export default WalletAndTokenChecker;
