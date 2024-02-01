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
          Botman, aka Simon Gray, is an eccentric and unexpectedly charming
          figure in Gotham City. His unique interpretation of Batman, combined
          with his distinctive quirks due to autism, make him a truly
          one-of-a-kind character. Botmans costume is a whimsical creation, a
          colorful and mismatched ensemble that he believes captures the essence
          of Batman. However, it looks more like a vibrant patchwork of various
          superhero themes, complete with an oversized, floppy cape and a
          mismatched mask. This outfit, though far from the sleek design of the
          real Batman, somehow adds to his quirky charm. Simons understanding of
          the world around him is offbeat. This unconventional perspective is
          confusing to some but strangely appealing to others. Despite, or
          perhaps because of, his unusual behavior and statements, Botman has an
          unexpected knack for capturing the interest of women. His approach to
          romantic interactions is as unconventional as his crime-fighting
          advice. He might, for instance, initiate a conversation with a woman
          by earnestly discussing the aerodynamics of capes or the dietary
          habits of bats. His authenticity and lack of pretense, combined with
          his innocent enthusiasm, make him surprisingly endearing. Women find
          his genuine nature and unfiltered conversation refreshing in a world
          where such honesty is rare. Botmans attempts at heroism in Gotham are
          as eccentric as his social interactions. He might be found redirecting
          traffic to save people from the chaos of inefficient road patterns or
          earnestly guarding a cat stuck in a tree, awaiting its decision to
          come down.
        </div>
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
