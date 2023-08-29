import Image from "next/image";
import { AppBar } from "./components/nav";
import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      {/*<ul>
        <li>
          <a href="default.asp">Tokenomics</a>
        </li>
      </ul>*/}
      <div className="flex flex-items justify-center">
        <div className="vertically-center">
          <Image
            src="/yin.png"
            alt="Yin Coin Logo"
            className="rotate"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
      <div className="message">
        <div>BALANCING THE WORLD.</div>
        <div>UTILIZING THE TOKEN 2022 STANDARD ON SOLANA.</div>
      </div>
    </div>
  );
}
