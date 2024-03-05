import React from "react";
import Navigation from "../src/app/components/navigation";
import ChatInterface from "@/app/components/alfred";
import "../src/app/garage.css";

const Contact = () => (
  <div>
    <Navigation />
    <div className="container">
      <div className="chat-interface">
        <ChatInterface></ChatInterface>
      </div>
    </div>
  </div>
);

export default Contact;
