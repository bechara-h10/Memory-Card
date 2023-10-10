import React from "react";
import Message from "./Message";

function LossMessage({ messageStatus, setMessageStatus }) {
  return (
    <Message
      message="You Lost! "
      messageStatus={messageStatus}
      setMessageStatus={setMessageStatus}
    />
  );
}

export default LossMessage;
