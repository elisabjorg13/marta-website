import React, { useState, useEffect } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import './TwitchPlayer.css'; // Import external CSS file

const TwitchPlayer = ({ channel }) => {
  const [dimensions, setDimensions] = useState({
    width: "900px",  // Default desktop size
    height: "400px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDimensions({ width: "100%", height: "600px" });
      } else {
        setDimensions({ width: "800px", height: "450px" });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="twitch-player-container">
      <TwitchEmbed
        channel={channel}
        width={dimensions.width}
        height={dimensions.height}
        theme="light"
        muted
        withChat={true} 
      />
    </div>
  );
};

export default TwitchPlayer;
