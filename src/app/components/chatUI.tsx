import React, { useState } from "react";
import "../message.css";

const ChatUI = () => {
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; sender: string }>
  >([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const userMessage = { id: Date.now(), text: newMessage, sender: "user" };
  // Adding user message

  const botResponse = {
    id: Date.now() + 1,
    text: "I'm a bot response.",
    sender: "bot",
  };
  // Adding bot response

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMessage.trim()) return; // Prevent sending empty messages
    const userMessage = { id: Date.now(), text: newMessage, sender: "user" };
    setMessages((messages) => [...messages, userMessage]);

    setNewMessage(""); // Clear input after sending

    // Simulate an automatic response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! I'm a bot.",
        sender: "bot",
      };
      setMessages((messages) => [...messages, botResponse]);
    }, 1000); // Delay the response by 1 second
  };

  return (
    <div className="chat-container">
      <div className="messages-area">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="message-input"
          value={newMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewMessage(e.target.value)
          }
          placeholder="Type a message..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatUI;
