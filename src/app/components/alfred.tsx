import React, { useState, FormEvent } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { sender: "assistant", content: "Hi there! How can I help you today?" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  // Use React.FormEvent<HTMLFormElement> to type the event parameter
  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userMessage.trim() === "") return;

    const newMessage = { sender: "user", content: userMessage };
    setMessages((messages) => [...messages, newMessage]);

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const reply = { sender: "assistant", content: data.response }; // Adjust 'data.response' based on your API's response structure
      setMessages((messages) => [...messages, reply]);
    } catch (error) {
      console.error("Failed to fetch assistant's reply:", error);
      // Optionally handle the error by displaying a message to the user
    }

    setUserMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message-bubble ${message.sender}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          max-width: 600px;
          margin: auto;
        }
        .messages-container {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
        }
        .message-bubble {
          margin-bottom: 12px;
          padding: 10px 20px;
          border-radius: 20px;
          max-width: 70%;
        }
        .user {
          align-self: flex-end;
          background-color: #007bff;
          color: white;
        }
        .assistant {
          align-self: flex-start;
          background-color: #f1f0f0;
        }
        .message-form {
          display: flex;
        }
        .message-form input {
          flex-grow: 1;
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
