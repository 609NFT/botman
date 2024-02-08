"use client";
// MemeGenerator.tsx
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const MemeGenerator = () => {
  const [text, setText] = useState("");
  const [imageSrc, setImageSrc] = useState("/images/botman_meme.png"); // Adjust with your default meme image path
  const memeRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const downloadMeme = () => {
    if (memeRef.current) {
      html2canvas(memeRef.current, { scale: 1 }).then((canvas) => {
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = image;
        link.click();
      });
    }
  };

  return (
    <div>
      <div ref={memeRef} style={{ position: "relative", textAlign: "center" }}>
        <img
          src={imageSrc}
          alt="Meme background"
          style={{ width: "100%", height: "auto" }}
        />
        <p
          style={{
            position: "absolute",
            top: "28%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "20px",
            maxWidth: "220px",
            wordWrap: "break-word",
          }}
        >
          {text}
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      />
      <button className="download_meme" onClick={downloadMeme}>
        Download Meme
      </button>
    </div>
  );
};

export default MemeGenerator;
