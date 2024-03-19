import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css"; // Default styling for wallet adapter
import TokenBalance from "./swaps";

const WalletConnectionComponent = () => {
  // Set the network to Devnet
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);

  // Add wallets you want to support
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

  const { publicKey } = useWallet();
  console.log(publicKey); // Log the publicKey to see if it's detected

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div>
            <WalletMultiButton />
            <TokenBalance tokenMintAddress="2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK" />
            {/* This button shows the connect wallet UI */}
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionComponent;
