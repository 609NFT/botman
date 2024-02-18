import "../src/app/cave.css";
// App.tsx or App.jsx

import React, { useState } from "react";
import WalletAndTokenChecker from "@/app/components/WalletAndTokenChecker";
import { Wallet } from "@mui/icons-material";

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div>
      <WalletAndTokenChecker></WalletAndTokenChecker>
    </div>
  );
};

export default App;
