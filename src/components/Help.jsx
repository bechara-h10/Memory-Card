import React, { useState } from "react";
import Message from "./Message";
import "../styles/help.css";

function Help({ helpStatus, setHelpStatus }) {
  return (
    <Message
      message={"Try not to click on the same character twice. Good luck!"}
      setMessageStatus={setHelpStatus}
      messageStatus={helpStatus}
    />
  );
}

export default Help;
