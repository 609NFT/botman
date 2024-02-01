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
          Botman stands out in Gotham not just for his unintended misadventures
          in heroism, but also for his unexpected charm, deeply influenced by
          his autism. This aspect of his character adds a unique layer to his
          interactions, particularly in romantic scenarios. His autism shapes
          the way he perceives and engages with the world, leading to a
          straightforward, genuine demeanor thats refreshingly unfiltered. This
          sincerity, so different from the calculated charm of his idol Batman,
          inadvertently captures attention in social settings. Botmans natural
          way of communicating, free from typical social pretenses, gives him an
          unassuming charisma. However, Botman himself often remains unaware of
          the impact of his presence. He approaches these interactions with a
          simplicity and honesty, not fully grasping the nuances of his appeal.
          While his efforts at emulating the heroics of Batman frequently result
          in more comic chaos than actual help, his endearing and unconventional
          charisma provides a compelling contrast to his persona as Botman,
          highlighting how his autism uniquely shapes his journey.
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
