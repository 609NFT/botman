import React, { useState, useEffect } from "react";

const FlashlightEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width indicates a mobile device
    const checkIfMobile = () => {
      const maxWidthForMobile = 768; // Adjust as needed
      setIsMobile(window.innerWidth <= maxWidthForMobile);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resizing
    window.addEventListener("resize", checkIfMobile);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      return; // Do not apply the effect if detected as mobile
    }

    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isMobile]);

  if (isMobile) {
    return null; // Do not render the component for mobile devices
  }

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
