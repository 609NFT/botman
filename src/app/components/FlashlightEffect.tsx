import React, { useState, useEffect } from "react";

const FlashlightEffect: React.FC = () => {
  // Using useState to keep track of the mouse position
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    // Define the event listener
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Attach the event listener to the window object
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Style for the flashlight overlay
  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 150px, rgba(0,0,0,0.75) 300px)`,
  };

  return <div style={overlayStyle} />;
};

export default FlashlightEffect;
