"use client";
// AudioToggle.js
import React, { useState, useEffect } from "react";

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("/audio/batman_theme.mp3"); // Adjust the path as necessary

  useEffect(() => {
    // Play or pause the audio based on the isPlaying state
    isPlaying ? audio.play() : audio.pause();

    // Cleanup function to pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="audio-toggle" onClick={togglePlay}>
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
};

export default AudioToggle;
