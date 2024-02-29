import React from "react";
import Navigation from "../src/app/components/navigation";
import GameModal from "@/app/components/capedCrusader";
import "../src/app/cave.css";

export default function Play() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>
      <GameModal></GameModal>
    </div>
  );
}
