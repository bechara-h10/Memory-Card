import React from "react";
import Card from "./Card";

function Cards({ characters, onClick }) {
  return (
    <div className="cards-container">
      {characters.map((character) => (
        <Card
          name={character.name}
          image={character.image}
          id={character.id}
          key={character.id}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default Cards;
