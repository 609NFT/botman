import React, { useEffect } from "react";
import ReactGA from "react-ga";
// Import your components

const TRACKING_ID = "G-DEWXHEKR9D"; // Replace with your Google Analytics tracking ID

function GA() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
}

export default GA;
