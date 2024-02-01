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
            src="/sticker.png"
            alt="BOTMAN"
            className="rotate"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
      <div className="message">
        <div className="about">
          When life gives you lemons, make orange juice and leave the world
          wondering how you did it. Thats what Batman would do, I think. -
          Botman
        </div>
        <div>
          CA:{" "}
          <a
            target="_blank"
            href="https://birdeye.so/token/2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK?chain=solana"
          >
            2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK
          </a>
        </div>
        <div className="socials">
          <a target="_blank" href="https://twitter.com/Botmansolana">
            <Image
              src="/twitter.png"
              alt="twitter"
              className="twitter"
              width={60}
              height={60}
              priority
            />
          </a>
          <a target="_blank" href="https://t.me/botmancommunity">
            <Image
              src="/telegram.png"
              alt="tg"
              className="twitter"
              width={30}
              height={30}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}
