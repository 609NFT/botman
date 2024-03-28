import React from "react";

// Define the styles with specific types for CSS properties
const footerStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  textAlign: "center",
  padding: "10px 20px 80px 20px",
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Botman. All rights reserved.</p>
      <div>
        Disclaimer: $BOTMAN WAS MADE FOR FUN AND HAS NO VALUE. DONT RISK MONEY
        YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE
        NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN. Botman memecoin is an
        independent digital currency project and is not affiliated, associated,
        authorized, endorsed by, or in any way officially connected with DC
        Comics, Warner Bros., or any of their subsidiaries or affiliates. The
        official DC Comics website can be found at{" "}
        <a target="_blank" href="https://www.dc.com/">
          DC.com
        </a>
        . The name Batman as well as related names, marks, emblems, and images
        are registered trademarks of their respective owners.
      </div>
    </footer>
  );
};

export default Footer;
