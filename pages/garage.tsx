import React from "react";
import "../src/app/garage.css";
import Navigation from "../src/app/components/navigation";
import ChatInterface from "@/app/components/alfred";
import Footer from "@/app/components/footer";
import FlashlightEffect from "@/app/components/FlashlightEffect";

const Garage = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
      rel="stylesheet"
    ></link>
    <FlashlightEffect></FlashlightEffect>
    <Navigation />
    <div className="container">
      <div className="chat-interface">
        <ChatInterface></ChatInterface>
      </div>
    </div>
    {/*<Footer></Footer>*/}
  </div>
);

export default Garage;
