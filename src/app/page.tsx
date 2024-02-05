import Image from "next/image";
import { AppBar } from "./components/nav";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      {/*<ul>
        <li>
          <a href="./token">Tokenomics</a>
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
          Thats what Batman would do, I think. - Botman
        </div>
        <div className="socials">
          <a
            target="_blank"
            href="https://dexscreener.com/solana/awfcdph2jf9kktz4enzenwjsxzjq7jyvkz2fgk7yiecr"
          >
            <Image
              src="/dex.png"
              alt="dexscreener"
              className="twitter"
              width={30}
              height={30}
            />
          </a>
          <a
            target="_blank"
            href="https://www.dextools.io/app/en/solana/pair-explorer/AwfcDPH2Jf9KKTz4EnzENwJsxZJq7jyVKz2fGk7yiECR?t=1706835661175"
          >
            <Image
              src="/dextools.png"
              alt="dextools"
              className="twitter"
              width={30}
              height={30}
            />
          </a>
          <a
            target="_blank"
            href="https://birdeye.so/token/2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK?chain=solana"
          >
            <Image
              src="/birdeye.png"
              alt="birdeye"
              className="twitter"
              width={30}
              height={30}
            />
          </a>
          <a target="_blank" href="https://twitter.com/Botmansolana">
            <Image
              src="/twitter.png"
              alt="twitter"
              className="twitter"
              width={30}
              height={30}
            />
          </a>
          <a target="_blank" href="https://t.me/botmancommunity">
            <Image
              src="/telegram.png"
              alt="tg"
              className="twitter"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className="buttonDIV">
          <Button
            target="_blank"
            className="button"
            href="https://jup.ag/swap/SOL-BOTMAN_2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
