import React from "react";
import Card from "./Card";

function Cards({ characters }) {
  return (
    <div className="cards-container">
      {characters.map((character) => (
        <Card name={character.name} image={character.image} />
      ))}
    </div>
  );
}

export default Cards;
