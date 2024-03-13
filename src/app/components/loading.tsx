import React from "react";
import { Button } from "react-bootstrap";

const finishedImage = "/images/loading.svg";

function LoadingScreen() {
  return (
    <div className="loading-body">
      <div className="loading-container">
        {/* Display the loading image */}
        <img className="loading-image" src={finishedImage} alt="Loading" />

        <p>Website Loading</p>
        <div className="loading-animation">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
