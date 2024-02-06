import Image from "next/image";
import { AppBar } from "./components/nav";
import React, { useState } from "react";
import { Button, Nav, NavItem, Navbar } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";

export default function Home() {
  return (
    <div>
      <div className="flex flex-items justify-center">
        <div className="vertically-center">
          <Image
            src="/images/botman.png"
            alt="BOTMAN"
            className="rotate"
            width={250}
            height={250}
            priority
          />
        </div>
      </div>
      <div className="message">
        <div className="socials">
          <Tooltip title="DEX Screener" placement="left">
            <a
              target="_blank"
              href="https://dexscreener.com/solana/awfcdph2jf9kktz4enzenwjsxzjq7jyvkz2fgk7yiecr"
            >
              <Image
                src="/images/dex.png"
                alt="dexscreener"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="DEXTools" placement="left">
            <a
              target="_blank"
              href="https://www.dextools.io/app/en/solana/pair-explorer/AwfcDPH2Jf9KKTz4EnzENwJsxZJq7jyVKz2fGk7yiECR?t=1706835661175"
            >
              <Image
                src="/images/dextools.png"
                alt="dextools"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="Birdeye" placement="left">
            <a
              target="_blank"
              href="https://birdeye.so/token/2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK?chain=solana"
            >
              <Image
                src="/images/birdeye.png"
                alt="birdeye"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="Twitter" placement="left">
            <a target="_blank" href="https://twitter.com/Botmansolana">
              <Image
                src="/images/twitter.png"
                alt="twitter"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="Telegram" placement="left">
            <a target="_blank" href="https://t.me/botmancommunity">
              <Image
                src="/images/telegram.png"
                alt="tg"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
        </div>
      </div>
      <div className="buttonDIV">
        <Button
          target="_blank"
          className="button"
          href="https://jup.ag/swap/SOL-BOTMAN_2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK"
        >
          Join the Cave
        </Button>
      </div>
    </div>
  );
}
