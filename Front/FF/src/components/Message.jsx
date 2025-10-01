import React from "react";
import "./Message.css";

function Message({ sender, text }) {
  const isUser = sender === "You";
  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
      <p><strong>{sender}:</strong> {text}</p>
    </div>
  );
}

export default Message;
