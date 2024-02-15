import React, { useState } from "react";

function GameModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Adding type to the event parameter
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div>
      <span className="navLink" onClick={openModal}>
        Play
      </span>
      {/*<button className="button2" onClick={openModal}>
        Play Botman caped crusader
  </button>*/}

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal} // Close modal when the backdrop is clicked
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "#fff",
              position: "relative",
            }}
            onClick={stopPropagation} // Prevent clicks within the modal from closing it
          >
            <iframe
              src="https://www.play-games.com/iframe/29554.html"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                overflow: "hidden",
              }}
              title="Batman Game"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameModal;
