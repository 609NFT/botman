"use client";
import React, { useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Slider() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 100;
  const images = [
    // Your images array...
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
