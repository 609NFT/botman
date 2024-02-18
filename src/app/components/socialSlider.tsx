// Inside your page.tsx or a similar component
import React from "react";
import Image from "next/image";

const SocialsSlider = () => {
  return (
    <div className="socials-slider">
      <Image
        src="/images/botman_flying.png"
        alt="BOTMAN"
        className="social-icon"
        width={250}
        height={250}
        priority
      />
      {/* Add more social links as needed */}
    </div>
  );
};

export default SocialsSlider;
