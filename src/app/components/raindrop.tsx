// Raindrop.tsx
import React from "react";

// Define an interface for the component props
interface RaindropProps {
  left: number | string; // Adjust based on how you're using 'left'
  speed: number;
}

const Raindrop: React.FC<RaindropProps> = ({ left, speed }) => {
  const style = {
    left: `${left}px`, // Or use `left` directly if it includes units
    "--drop-speed": speed,
  } as React.CSSProperties; // This casting is necessary for custom properties

  return <div className="raindrop" style={style}></div>;
};

export default Raindrop;
