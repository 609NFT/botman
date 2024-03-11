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
        $BOTMAN WAS MADE FOR FUN AND HAS NO VALUE. DONT RISK MONEY YOU ARE
        AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT
        RESPONSIBLE FOR THE PRICE OF THE TOKEN.
      </div>
    </footer>
  );
};

export default Footer;
