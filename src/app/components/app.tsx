import React from "react";

function AudioPlayer() {
  let initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    /*targetAudio.play();*/
  };

  return (
    <div className="container">
      <button className="btn" onClick={initAudio}>
        Play Mp3 Audio
      </button>

      <audio className="audioBtn">
        <source src="https://drive.google.com/file/d/1QLRFJFBWWuuGRb2-n98DZOxiwRgtRdHP"></source>
      </audio>
    </div>
  );
}

export default AudioPlayer;
