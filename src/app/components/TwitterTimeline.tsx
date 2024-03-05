import React, { useEffect } from "react";

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "750px",
        maxHeight: "1000px",
        overflow: "auto", // Enable scrolling
        margin: "0 auto", // Center the container
        borderRadius: "15px", // Border radius
      }}
    >
      <a
        className="twitter-timeline"
        href="https://twitter.com/Botmansolana?ref_src=twsrc%5Etfw"
      >
        Tweets by BotmanSolana
      </a>
    </div>
  );
};

export default TwitterTimeline;
