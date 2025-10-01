import React, { useEffect, useRef } from "react";
import Message from "./Message";
import "./ChatBox.css";

function ChatBox({ messages }) {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chatbox" ref={chatRef}>
      {messages.map((msg, i) => (
        <Message key={i} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default ChatBox;
