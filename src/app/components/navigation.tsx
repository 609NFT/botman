// navigation.tsx
import React, { useState } from "react";
import Link from "next/link";
import WalletConnectionComponent from "./WalletConnection";
import { Button } from "react-bootstrap";
import ClickToCopy from "./ClickToCopy";

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
      <div className="clickCopy">
        <ClickToCopy text="CA: 2adqrK24G2...AQx7Y1kSSK" />
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link href="https:app.thebotman.xyz" target="_blank" passHref>
            <span>BotFi</span>
          </Link>
        </li>
        <li>
          <Link href="/ruggers" passHref>
            <span>Ruggers</span>
          </Link>
        </li>
        {/*<li>
          <Link href="/about" passHref>
            <span>About</span>
          </Link>
        </li>*/}
        <li>
          <Link
            href="https://www.tensor.trade/trade/botman"
            target="_blank"
            passHref
          >
            <span>NFT</span>
          </Link>
        </li>
        <li>
          <Link href="/characters" passHref>
            <span>Characters</span>
          </Link>
        </li>
        <li>
          <Link href="/comics" passHref>
            <span>Comics</span>
          </Link>
        </li>
        <li>
          <Link href="/cave" passHref>
            <span>Cave</span>
          </Link>
        </li>
        <li>
          <Link href="/garage" passHref>
            <span>Garage</span>
          </Link>
        </li>
        <li>
          <WalletConnectionComponent></WalletConnectionComponent>
        </li>
        {/* Additional links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
