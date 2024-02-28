import React from "react";

// Define an interface for the component props
interface DownloadPDFButtonProps {
  url: string;
  fileName?: string; // Make fileName optional
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({
  url,
  fileName = "Botman_Comic.pdf",
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName; // fileName is now guaranteed to have a value
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="button" onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default DownloadPDFButton;
