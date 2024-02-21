"use client";
import React, { useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Slider2() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 100;
  const images = [
    // Your images array...
    {
      id: 1,
      url: "https://i.postimg.cc/yxKs6CpP/buy.png",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/bY0qCddF/jeets.png",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/hG7B9tHs/lfg.png",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/GtbnwJ9g/wen.png",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/Wp7PmKfB/fomo.png",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/9MtspR1d/autism.png",
    },
    {
      id: 7,
      url: "https://i.postimg.cc/Wz5KBBBt/cucking.png",
    },
    {
      id: 9,
      url: "https://i.postimg.cc/nV269mXZ/chad.png",
    },
  ];

  // Function to open the popup with the selected image
  const openPopup = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="App">
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          if (container) {
            container.scrollLeft -= scrollAmount;
          }
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="images-container" ref={sliderRef}>
        {images.map((image) => (
          <img
            className="image"
            alt="sliderImage"
            key={image.id}
            src={image.url}
            onClick={() => openPopup(image.url)} // Add onClick handler here
          />
        ))}
      </div>
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          if (container) {
            container.scrollLeft += scrollAmount;
          }
        }}
      >
        <ChevronRightIcon />
      </button>
      {isPopupOpen && ( // Conditional rendering for the popup
        <div className="image-popup" onClick={closePopup}>
          <img src={selectedImage} alt="Selected" />
          {/*<p>Click anywhere to close</p>*/}
        </div>
      )}
    </div>
  );
}
