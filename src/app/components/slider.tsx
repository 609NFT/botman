"use client";

import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Slider() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
    {
      id: 1,
      url: "https://i.postimg.cc/HnVsbwrv/botman1.jpg",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/JzbPJzGj/botman4.jpg",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/zBFWfsQS/botman2.jpg",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/W4dm8p49/botman5.jpg",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/nr4NLGbQ/botman3.jpg",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/sXQvbvFL/botman9.jpg",
    },
  ];

  return (
    <div className="App">
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="images-container" ref={sliderRef}>
        {images.map((image) => {
          return (
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
            />
          );
        })}
      </div>
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
