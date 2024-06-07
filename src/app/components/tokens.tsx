import React, { useState, useEffect, useMemo } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, AccountLayout, getMint } from "@solana/spl-token";
import { TokenListProvider, TokenInfo } from "@solana/spl-token-registry";
import styles from "../WalletTokens.module.css"; // Import the CSS module

interface WalletTokensProps {
  publicKey: string;
}

interface TokenData {
  mint: string;
  balance: number;
  decimals: number;
  name?: string;
  logoURI?: string;
}

const WalletTokens: React.FC<WalletTokensProps> = ({ publicKey }) => {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const connection = useMemo(
    () =>
      new Connection(
        "https://mainnet.helius-rpc.com/?api-key=22ef82dc-8230-48c5-b093-f2cc9acf690f"
      ),
    []
  );

  useEffect(() => {
    if (!publicKey) return;

    const fetchTokens = async () => {
      setLoading(true);
      try {
        const tokenAccounts = await connection.getTokenAccountsByOwner(
          new PublicKey(publicKey),
          { programId: TOKEN_PROGRAM_ID }
        );

        if (tokenAccounts.value.length === 0) {
          console.log("No token accounts found for this wallet.");
          setLoading(false);
          return;
        }

        const tokenListProvider = new TokenListProvider();
        const tokenList = await tokenListProvider.resolve();
        const tokenRegistry = tokenList
          .filterByClusterSlug("mainnet-beta")
          .getList();

        const tokensData: TokenData[] = [];

        for (const { account } of tokenAccounts.value) {
          const accountInfo = AccountLayout.decode(account.data);
          const amount = BigInt(accountInfo.amount);
          const mintPublicKey = new PublicKey(accountInfo.mint);

          // Fetch mint information
          const mintInfo = await getMint(connection, mintPublicKey);
          const decimals = mintInfo.decimals;

          const tokenData: TokenData = {
            mint: mintPublicKey.toBase58(),
            balance: Number(amount) / Math.pow(10, decimals),
            decimals,
          };

          // Find the token metadata in the registry
          const tokenMetadata = tokenRegistry.find(
            (t) => t.address === tokenData.mint
          );
          if (tokenMetadata) {
            tokenData.name = tokenMetadata.name;
            tokenData.logoURI = tokenMetadata.logoURI;
          }

          tokensData.push(tokenData);
        }

        setTokens(tokensData);
      } catch (error) {
        console.error("Error fetching token balance:", error);
      }
      setLoading(false);
    };

    fetchTokens();
  }, [publicKey, connection]);

  return (
    <div>
      {loading ? (
        <p>Loading tokens...</p>
      ) : (
        <div>
          <h3>Your Tokens</h3>
          {tokens.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Token Name</th>
                  <th>Token Image</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token, index) => (
                  <tr key={index}>
                    <td>{token.name || "Unknown"}</td>
                    <td>
                      {token.logoURI ? (
                        <img
                          src={token.logoURI}
                          alt={token.name}
                          width="32"
                          height="32"
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    <td>{token.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No tokens found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletTokens;
