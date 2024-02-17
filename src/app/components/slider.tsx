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
      url: "https://i.postimg.cc/44QdNcKr/photo-2024-02-08-16-19-53.jpg",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/zBFWfsQS/botman2.jpg",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/zGrYLt97/photo-2024-02-08-16-19-40.jpg",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/D00yMj2L/photo-2024-02-08-16-19-48.jpg",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/zBPzmC2h/photo-2024-02-08-16-19-45.jpg",
    },
    {
      id: 7,
      url: "https://i.postimg.cc/wMjLPvq0/photo-2024-02-12-12-14-36.jpg",
    },
    {
      id: 9,
      url: "https://i.postimg.cc/dth0dhq3/photo-2024-02-14-14-27-26.jpg",
    },
    {
      id: 10,
      url: "https://i.postimg.cc/x1NgGzrZ/photo-2024-02-13-04-54-20.jpg",
    },
    {
      id: 11,
      url: "https://i.postimg.cc/fLyVXYpt/photo-2024-02-16-12-07-19.jpg",
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
