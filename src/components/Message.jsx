import React from "react";
import "../styles/message.css";

function Message({ message, setMessageStatus, messageStatus }) {
  return (
    <div className={`message-wrapper ${messageStatus ? "active" : ""}`}>
      <span onClick={() => setMessageStatus(false)}>
        <i className="fa-solid fa-x"></i>
      </span>
      <p>{message}</p>
    </div>
  );
}

export default Message;
