import React from "react";
import Navigation from "../src/app/components/navigation";
import GameModal from "@/app/components/capedCrusader";
import "../src/app/globals.css";

export default function Play() {
  return (
    <div>
      <Navigation></Navigation>
      <h1>Play Page</h1>
      <p>This is the about page.</p>
      <GameModal></GameModal>
    </div>
  );
}
