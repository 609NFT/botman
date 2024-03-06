import React from "react";
import "../src/app/garage.css";
import Navigation from "../src/app/components/navigation";
import ChatInterface from "@/app/components/alfred";

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
