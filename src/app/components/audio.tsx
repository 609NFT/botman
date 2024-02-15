"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

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
    <IconButton
      className="audio-toggle"
      style={{ backgroundColor: "white", borderRadius: "50%" }}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      Play
    </IconButton>
  );
};

export default AudioToggle;

{
  /*<IconButton className="audio-toggle" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
  </IconButton>
<button className="audio-toggle" onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying ? "Pause" : "Play"}
    </button>

*/
}
