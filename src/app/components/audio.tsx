"use client";
import React, { useState, useEffect } from "react";

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/batman_theme.mp3"); // Adjust the path as necessary
    // Function to play or pause the audio based on isPlaying state
    const togglePlayback = () => {
      if (isPlaying) {
        audio
          .play()
          .catch((error) => console.error("Error playing audio:", error));
      } else {
        audio.pause();
      }
    };

    // Call togglePlayback whenever isPlaying changes
    togglePlayback();

    // Cleanup function to pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, [isPlaying]); // Depend on isPlaying to toggle playback

  return (
    <button className="audio-toggle" onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
};

export default AudioToggle;
