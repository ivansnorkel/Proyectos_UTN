import React from "react";
import "./MessageBubble.css";

const MessageBubble = ({ message }) => {
  const { emisor, text, hora, status } = message;

  return (
    <div
      className={`message-bubble ${
        emisor === "Tú" ? "outgoing-message" : "incoming-message"
      }`}
    >
      <p className="message-text">{text}</p>
      <p className="message-info">
        {`hora: ${hora} `}
        <span className="message-status">{status}</span>
      </p>
    </div>
  );
};

export default MessageBubble;
