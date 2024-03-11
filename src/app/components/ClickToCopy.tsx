import React from "react";

interface ClickToCopyProps {
  text: string;
}

const ClickToCopy: React.FC<ClickToCopyProps> = ({ text }) => {
  const copyTextToClipboard = async () => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(
          "2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK"
        );
        alert("CA Copied to Clipboard. You're ready to buy Botman.");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        alert("CA Copied to Clipboard. You're ready to buy Botman.");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <div onClick={copyTextToClipboard} style={{ cursor: "pointer" }}>
      CA: 2adqrK24G2...AQx7Y1kSSK
    </div>
  );
};

export default ClickToCopy;
