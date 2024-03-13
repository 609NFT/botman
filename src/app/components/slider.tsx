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
      id: 0,
      url: "https://i.postimg.cc/ZKJXgxV8/photo-2024-03-13-08-38-42.jpg",
    },
    {
      id: 0,
      url: "https://i.postimg.cc/G2gDjLRY/photo-2024-03-07-18-50-54.jpg",
    },
    {
      id: 1,
      url: "https://i.postimg.cc/VL7HqfZD/photo-2024-03-10-09-57-38.jpg",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/y63YS5YL/photo-2024-03-08-14-08-17.jpg",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/gJ0v5gpr/photo-2024-02-07-15-54-54.jpg",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/dVQqJ8rs/photo-2024-03-07-10-48-16.jpg",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/zBFWfsQS/botman2.jpg",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/zGrYLt97/photo-2024-02-08-16-19-40.jpg",
    },
    {
      id: 7,
      url: "https://i.postimg.cc/D00yMj2L/photo-2024-02-08-16-19-48.jpg",
    },
    {
      id: 8,
      url: "https://i.postimg.cc/zBPzmC2h/photo-2024-02-08-16-19-45.jpg",
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
    {
      id: 12,
      url: "https://i.postimg.cc/d3nFJzYz/photo-2024-02-19-12-36-48.jpg",
    },
    {
      id: 13,
      url: "https://i.postimg.cc/5NCs3M6p/photo-2024-02-20-19-25-28.jpg",
    },
    {
      id: 14,
      url: "https://i.postimg.cc/wMjLPvq0/photo-2024-02-12-12-14-36.jpg",
    },
    {
      id: 15,
      url: "https://i.postimg.cc/CdpYKbK4/photo-2024-03-03-18-00-28.jpg",
    },
    {
      id: 16,
      url: "https://i.postimg.cc/QCdr0k5m/photo-2024-03-01-14-52-05.jpg",
    },
    {
      id: 17,
      url: "https://i.postimg.cc/vBDW5yZG/photo-2024-03-05-08-41-23.jpg",
    },
    {
      id: 18,
      url: "https://i.postimg.cc/x1hrjKFN/photo-2024-03-03-18-00-56.jpg",
    },
    {
      id: 19,
      url: "https://i.postimg.cc/tCbkKr6w/photo-2024-03-05-16-56-59.jpg",
    },
    {
      id: 20,
      url: "https://i.postimg.cc/44QdNcKr/photo-2024-02-08-16-19-53.jpg",
    },
    {
      id: 21,
      url: "https://i.postimg.cc/SsMJrxG8/photo-2024-03-11-11-09-27.jpg",
    },
    {
      id: 22,
      url: "https://i.postimg.cc/3JKxyBz2/photo-2024-03-11-11-09-02.jpg",
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
