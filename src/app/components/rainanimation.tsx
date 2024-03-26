// RainAnimation.js
import React from "react";
import Raindrop from "./raindrop";

const RainAnimation = () => {
  const numberOfDrops = 100;
  const drops = Array.from({ length: numberOfDrops }).map((_, index) => {
    const left = Math.floor(Math.random() * window.innerWidth);
    const speed = Math.random();
    return <Raindrop key={index} left={left} speed={speed} />;
  });

  return <div className="container">{drops}</div>;
};

export default RainAnimation;
