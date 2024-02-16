import React from "react";

// Define an interface for the component's props
interface CharacterProps {
  name: string;
  description: string;
  imageUrl: string;
}

// The Character component with typed props
const Character: React.FC<CharacterProps> = ({
  name,
  description,
  imageUrl,
}) => {
  return (
    <div className="character">
      <img src={imageUrl} alt={name} className="character-image" />
      <div className="character-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Character;
