"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button, Nav, NavItem, Navbar } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";
import Slider from "./components/slider";
import MemeGenerator from "./components/meme";
import Modal from "./components/modal";
import BotmanPrice from "./components/getBotmanPrice";
import SolPrice from "./components/getSolPrice";
import Navigation from "./components/navigation";
import SocialsSlider from "./components/socialSlider";
import Slider2 from "./components/slider2";
import TwitterTimeline from "./components/TwitterTimeline";
import Footer from "./components/footer";
import FlashlightEffect from "./components/FlashlightEffect";
import LoadingScreen from "./components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data or any asynchronous task
    setTimeout(() => {
      setIsLoading(false); // Set loading to false once data is loaded or specific task is completed
    }, 6000); // Adjust time or condition as necessary
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      {/*<FlashlightEffect></FlashlightEffect>*/}
      <Navigation></Navigation>
      <SocialsSlider></SocialsSlider>
      <div className="the_socials">
        <div className="socials">
          <Tooltip title="DEX Screener" placement="top">
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
          <Tooltip title="DEXTools" placement="top">
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
          <Tooltip title="Birdeye" placement="top">
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
          <Tooltip title="Solscan" placement="top">
            <a
              target="_blank"
              href="https://solscan.io/token/2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK"
            >
              <Image
                src="/images/solscan.png"
                alt="solscan"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="RugCheck" placement="top">
            <a
              target="_blank"
              href="https://rugcheck.xyz/tokens/2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK"
            >
              <Image
                src="/images/rugcheck.png"
                alt="rugcheck"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <br></br>
          <Tooltip title="Instagram" placement="top">
            <a target="_blank" href="https://www.instagram.com/botmanonsolana/">
              <Image
                src="/images/ig.png"
                alt="instagram"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="Tiktok" placement="top">
            <a target="_blank" href="https://www.tiktok.com/@botmanonsol">
              <Image
                src="/images/tiktok.png"
                alt="tiktok"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
          <Tooltip title="Twitter" placement="top">
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
          <Tooltip title="Telegram" placement="top">
            <a target="_blank" href="https://t.me/botmancommunityportal">
              <Image
                src="/images/telegram.png"
                alt="telegram"
                className="twitter"
                width={30}
                height={30}
              />
            </a>
          </Tooltip>
        </div>
      </div>
      <div className="header_message">
        Community Managed | Contract Renounced | Liquidity Burned
      </div>
      <div className="header_message_2">Supply: 1,000,000</div>
      <div className="buttonDIV">
        <Button
          target="_blank"
          className="button"
          href="https://jup.ag/swap/SOL-BOTMAN"
        >
          Join The Cave
        </Button>
      </div>
      <Image
        src="/images/Triangle.svg"
        alt="tg"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        sizes="100vw"
        className="triangle"
      />
      <div className="second_div">
        <div className="second_content">Botman&apos;s quest around sotham.</div>
        {/*<div className="footer">botman live normul life.</div>*/}
        <div>
          <Slider></Slider>
          <button className="button2" onClick={openModal}>
            Create Your Own
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <MemeGenerator />
          </Modal>
        </div>
        {/*<div>
          <AudioPlayer></AudioPlayer>
        </div>*/}
      </div>
      <Image
        src="/images/Triangle2.svg"
        alt="tg"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        sizes="100vw"
        className="triangle"
      />
      <div className="third_div">
        <div className="second_content">
          <BotmanPrice></BotmanPrice>
          {/*<Button className="cave" onClick={handleClick}>
            🪨 Enter The Cave 🔦
      </Button>*/}
          <div id="dexscreener-embed">
            <iframe src="https://dexscreener.com/solana/AwfcDPH2Jf9KKTz4EnzENwJsxZJq7jyVKz2fGk7yiECR?embed=1&theme=dark&trades=0&info=0"></iframe>
          </div>
          <SolPrice></SolPrice>
        </div>
      </div>
      <Image
        src="/images/Triangle.svg"
        alt="tg"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        sizes="100vw"
        className="triangle"
      />
      <div className="fourth_div">
        <div className="third_content">Spread the Botman vibes on CT.</div>
        {/*<div className="footer">botman live normul life.</div>*/}
        <div>
          <TwitterTimeline></TwitterTimeline>
        </div>
      </div>
      {/*<div className="footer_div">Copyright © Botman 2024</div>*/}
      <Footer></Footer>
    </div>
  );
}
