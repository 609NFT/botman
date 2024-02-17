import React from "react";
import Navigation from "../src/app/components/navigation";
import GameModal from "@/app/components/capedCrusader";
import "../src/app/globals.css";

export default function Play() {
  return (
    <div>
      <Navigation></Navigation>
      <GameModal></GameModal>
    </div>
  );
}
