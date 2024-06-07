// components/WalletProviderWrapper.tsx
"use client";
import React, { useEffect } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css"; // Default styles for the wallet modal

const WalletProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const wallets = [new PhantomWalletAdapter()];

  useEffect(() => {
    console.log("WalletProviderWrapper rendered");
  }, []);

  return (
    <ConnectionProvider endpoint="https://mainnet.helius-rpc.com/?api-key=22ef82dc-8230-48c5-b093-f2cc9acf690f">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletProviderWrapper;
