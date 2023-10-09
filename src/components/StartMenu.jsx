import React from "react";
import "../styles/startMenu.css";

function StartMenu({ setHelpStatus, setIsStarted }) {
  return (
    <div className="start-menu-wrapper">
      <h1>Historical Characters</h1>
      <p>Memory Game</p>
      <div className="buttons-wrapper">
        <button className="start-button" onClick={() => setIsStarted(true)}>
          Start
        </button>
        <button className="help-button" onClick={() => setHelpStatus(true)}>
          How to play
        </button>
      </div>
    </div>
  );
}

export default StartMenu;
