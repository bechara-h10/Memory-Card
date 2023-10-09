import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/card.css";

function Card({ name, image }) {
  return (
    <Tilt>
      <div className="card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <span>{name}</span>
      </div>
    </Tilt>
  );
}

export default Card;
