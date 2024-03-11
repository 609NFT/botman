import React from "react";
import "../src/app/garage.css";
import Navigation from "../src/app/components/navigation";
import ChatInterface from "@/app/components/alfred";
import Footer from "@/app/components/footer";

const Contact = () => (
  <div>
    <Navigation />
    <div className="container">
      <div className="chat-interface">
        <ChatInterface></ChatInterface>
      </div>
    </div>
    <Footer></Footer>
  </div>
);

export default Contact;
