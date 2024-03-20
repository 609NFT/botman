import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress, getAccount } from "@solana/spl-token";
import WalletConnectionComponent from "./WalletConnection";

// Define a type for the component props
interface TokenBalanceProps {
  tokenMintAddress: string;
}

const TokenBalance: React.FC<TokenBalanceProps> = ({ tokenMintAddress }) => {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    const fetchBalance = async () => {
      if (!publicKey) return;

      try {
        const connection = new Connection(
          "https://mainnet.helius-rpc.com/?api-key=941f3ede-47ac-4d77-8ac4-b20df5d16b73",
          "confirmed"
        );
        const tokenMintPublicKey = new PublicKey(tokenMintAddress);
        const associatedTokenAddress = await getAssociatedTokenAddress(
          tokenMintPublicKey,
          publicKey
        );

        // Assuming you meant to fetch the token account information
        const tokenAccountInfo = await getAccount(
          connection,
          associatedTokenAddress
        );
        setBalance(tokenAccountInfo.amount.toString());
      } catch (error) {
        console.error("Error fetching token balance:", error);
        setBalance("0");
      }
    };

    if (connected) {
      fetchBalance();
    }
  }, [publicKey, tokenMintAddress, connected]);

  const rawBalance = BigInt(balance);
  const tokenDecimals = 6;
  const divisor = BigInt(Math.pow(10, tokenDecimals));
  const readableBalance = rawBalance / divisor;
  const formattedNumber = readableBalance.toLocaleString("en-US");
  const newBalance = formattedNumber.toString();

  return (
    <div>
      {publicKey ? (
        <span className="balance">Botman Balance: {newBalance}</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default TokenBalance;
