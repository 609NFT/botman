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
          Botman, known as Simon Gray in his day-to-day life, is a complex
          character residing in the tumultuous city of Gotham. Unlike the
          legendary Batman, Simons well-intentioned efforts, influenced by his
          unique perception of the world due to his autism, often result in
          unforeseen complications for those around him. Simon, deeply
          enthralled by Batmans persona, crafts his own makeshift costume,
          transforming into Botman. In his mind, he is a guardian of justice,
          but his actions often lack the finesse and understanding of the real
          Batmans interventions. His attempts at mimicking Batmans heroic deeds,
          from solving neighborhood disputes to preventing petty crimes, usually
          end up in disarray. His interventions, while meant to help, often
          escalate simple misunderstandings or create new problems altogether.
          Residents of his neighborhood, while aware of his good intentions, are
          frequently left dealing with the aftermath of his misguided heroics.
          Botmans presence in Gotham is a double-edged sword. On one hand, his
          dedication to emulating Batmans valor is admirable, stemming from a
          genuine desire to contribute positively to his community. On the
          other, his actions, influenced by a misinterpretation of social cues
          and a lack of practical skills, inadvertently lead to more chaos than
          calm. This portrayal of Simon as Botman is a reminder that intentions,
          however noble, can have unintended consequences. His story underscores
          the complexities of perception and impact, particularly in a city as
          fraught with challenges as Gotham.
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
