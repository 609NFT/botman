import React from "react";
import "../src/app/globals.css";
import Navigation from "../src/app/components/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleSheetData from "@/app/components/googleSheetData";

export default function About() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>
      <GoogleSheetData></GoogleSheetData>
    </div>
  );
}
