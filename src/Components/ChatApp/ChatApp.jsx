import React, { useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./ChatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      emisor: "Tú",
      text: "Hola, ¿qué tal?",
      hora: "22:10",
      status: "visto",
    },
    {
      emisor: "Usuario",
      text: "Todo bien",
      hora: "22:11",
      status: "no-visto",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendNewMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newMessage = {
      emisor: "Tú",
      text: inputValue,
      hora: new Date().toLocaleTimeString().slice(0, 5),
      status: "no-visto",
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <form className="form" onSubmit={handleSendNewMessage}>
        <input
          className="input"
          type="text"
          placeholder="Escribe aquí..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="send-button" type="submit">
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatApp;
