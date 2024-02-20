import React from "react";
import Navigation from "../src/app/components/navigation";
import "../src/app/globals.css";

export default function About() {
  return (
    <div className="about">
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>
      <div className="about_div">
        <p className="about_p">
          In the concrete jungle of Sotham, where the only thing higher than the
          skyscrapers is the citizens capacity for disbelief, roams a hero so
          unpredictable, hes practically the mascot for Murphys Law—turning
          every crisis into a punchline. Meet Botman: the only vigilante who
          could accidentally turn a stealth mission into a viral dance-off
          challenge. This isnt your garden-variety hero with a tragic backstory
          and a chiseled jawline. Nope, Botman is more like if optimism had a
          lovechild with chaos theory, and then sent that child to public
          school.
        </p>
        <p className="about_p">
          Botmans origin story? He didnt get bitten by a radioactive accountant
          or struck by enlightening financial advice. His superpower is the
          profound ability to elevate well-meaning to new, catastrophic heights,
          turning every attempt to help into a slapstick symphony that leaves
          the city teetering between erecting a statue in his honor or banning
          him from using adhesive tape unsupervised.
        </p>
        <p className="about_p">
          With a heart of gold and a brain of, well, something less conductive,
          Botman has stumbled into being Sothams accidental mascot. Hes not the
          hero we expected, or even the one we were sure we needed, but hes
          here, hes inexplicably resilient, and somehow, hes become the
          glue—preferably non-adhesive, given his restrictions—that holds this
          city together.
        </p>
        <p className="about_p">
          So, welcome to Sotham, a place where heroism and incompetence are
          indistinguishably intertwined, thanks to Botman. He might call it
          superpowers, others might whisper autism, but one things for sure:
          life in Sotham is never dull with Botman on the prowl. Whether hes
          saving public statues from the boredom of stillness or the city from a
          problem it didnt know it had until he showed up, Botman is a reminder
          that sometimes, the most heroic acts come from the most unexpected
          places.
        </p>
      </div>
    </div>
  );
}
