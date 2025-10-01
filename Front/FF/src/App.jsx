import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "You", text: message }];
    setMessages(newMessages);

    // Send to backend
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      // Add bot reply
      setMessages([...newMessages, { sender: "Bot", text: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { sender: "Bot", text: "⚠️ Error connecting to server" },
      ]);
    }
  };

  return (
    <div className="app">
      <h1>Gemini Chatbot</h1>
      <ChatBox messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
}

export default App;
