import "../src/app/cave.css";
// App.tsx or App.jsx
import WalletConnectionComponent from "@/app/components/WalletConnection";
import React, { useState } from "react";
//import WalletAndTokenChecker from "@/app/components/WalletAndTokenChecker";

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div>
      <WalletConnectionComponent></WalletConnectionComponent>
    </div>
  );
};

export default App;
