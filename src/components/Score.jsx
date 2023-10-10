import React from "react";
import { useState } from "react";
import "../styles/score.css";

function Score({ score, bestScore }) {
  return (
    <div className="score-wrapper">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default Score;
