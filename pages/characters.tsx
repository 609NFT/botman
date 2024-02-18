// CharactersPage.js
import React from "react";
import characters from "../src/data/charactersData";
import Navigation from "@/app/components/navigation";
import Character from "@/app/components/character"; // Adjust the import path as necessary
import "../src/app/globals.css"; // Make sure to create this CSS file
import { Nav } from "react-bootstrap";

const CharactersPage = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
      rel="stylesheet"
    ></link>
    <Navigation></Navigation>
    <div className="characters-container">
      {characters.map((character) => (
        <Character key={character.name} {...character} />
      ))}
    </div>
  </div>
);

export default CharactersPage;
