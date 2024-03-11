import React, { useState, useEffect } from "react";

const FlashlightEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });

  // Function to detect mobile devices
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  useEffect(() => {
    // Do not apply the effect if on a mobile device
    if (isMobileDevice()) {
      return;
    }

    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const overlayStyle: React.CSSProperties = isMobileDevice()
    ? {}
    : {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 150px, rgba(0,0,0,0.75) 300px)`,
      };

  // Do not render the component if on a mobile device
  if (isMobileDevice()) {
    return null;
  }

  return <div style={overlayStyle} />;
};

export default FlashlightEffect;
