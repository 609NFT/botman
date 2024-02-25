// navigation.tsx
import React, { useState } from "react";
import Link from "next/link";
import WalletAndTokenChecker from "./WalletAndTokenChecker";
import { Button } from "react-bootstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    alert("Coming Soon...");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link href="/" passHref>
          <img src="/images/botman.svg" alt="Logo" className="logo" />
        </Link>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link href="/about" passHref>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/characters" passHref>
            <span>Characters</span>
          </Link>
        </li>
        <li>
          <Link href="/play" passHref>
            <span>Play</span>
          </Link>
        </li>
        <li>
          <Button
            variant="primary"
            onClick={handleClick}
            className="connectWallet"
          >
            Connect Wallet
          </Button>
        </li>
        {/* Additional links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
