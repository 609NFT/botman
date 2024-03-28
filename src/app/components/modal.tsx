import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add when the modal is open and remove when the modal is closed
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]); // Ensure effect updates if isOpen or onClose changes

  if (!isOpen) return null;

  return (
    <div style={backdropStyle}>
      <div ref={modalContentRef} style={modalStyle}>
        {children}
      </div>
    </div>
  );
};

// Basic styles for backdrop and modal content
const backdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  // Specify the width and max-width to control size
  width: "80%", // or a specific pixel value
  maxWidth: "400px", // Adjust based on your design needs
  // Specify the height and max-height if you want to control height
  maxHeight: "80vh", // 80% of the viewport height
  overflowY: "auto", // Add scroll for overflowing content
  position: "relative", // For positioning close button or other elements absolutely within the modal
  display: "flex",
  flexDirection: "column",
  // Center the modal content vertically and horizontally
  margin: "auto",
  color: "black",
  zIndex: 1001,
};

export default Modal;
