import React, { useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const CheckTokenBalance = () => {
  const { publicKey } = useWallet();
  const tokenMintAddress = "2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK";

  useEffect(() => {
    const checkBalanceAndRedirect = async () => {
      if (!publicKey) {
        // Redirect if no wallet is connected
        window.location.href = "/";
        return;
      }

      const connection = new Connection(
        "https://mainnet.helius-rpc.com/?api-key=941f3ede-47ac-4d77-8ac4-b20df5d16b73"
      );
      try {
        const mintPublicKey = new PublicKey(tokenMintAddress);
        const walletPublicKey = publicKey;

        const { value: tokenAccounts } =
          await connection.getParsedTokenAccountsByOwner(walletPublicKey, {
            programId: TOKEN_PROGRAM_ID,
            mint: mintPublicKey,
          });

        // Assuming the first account is the one we're interested in, checking its balance
        const balance =
          tokenAccounts[0]?.account.data.parsed.info.tokenAmount.uiAmount;

        // Redirect if balance is not above 100 tokens
        if (!balance || balance <= 1) {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Failed to fetch token balance:", error);
        window.location.href = "/";
      }
    };

    checkBalanceAndRedirect();
  }, [publicKey]);

  return null; // This component does not render anything
};

export default CheckTokenBalance;
