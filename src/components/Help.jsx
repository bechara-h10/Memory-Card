import React, { useState } from "react";
import "../styles/help.css";

function Help({ helpStatus, setHelpStatus }) {
  return (
    <div className={`help-wrapper ${helpStatus ? "active" : ""}`}>
      <span onClick={() => setHelpStatus(false)}>
        <i class="fa-solid fa-x"></i>
      </span>
      <p>A number of historical figures will pop up.</p>
      <p>
        Click on any one you like but don't click twice on the same character
      </p>
    </div>
  );
}

export default Help;
