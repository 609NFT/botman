import React, { useState } from "react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      content: "Welcume to tha garaeg, Botman. Houw kan I halp yu todai?",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    setMessages((messages) => [
      ...messages,
      { sender: "user", content: userMessage },
    ]);
    try {
      const response = await fetch(
        "https://the-botman-dfb7af4dfa1b.herokuapp.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_message: userMessage }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMessages((messages) => [
        ...messages,
        { sender: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }

    setUserMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message-row ${message.sender}-row`}>
            {message.sender === "assistant" && (
              <img
                src="/images/alfred_pfp.png"
                alt="Assistant"
                className="profile-pic"
              />
            )}
            <div className={`message-bubble ${message.sender}`}>
              {message.content}
            </div>
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
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .messages-container {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
          text-align: left;
        }
        .message-row {
          display: flex;
          margin-bottom: 12px;
        }
        .user-row {
          justify-content: flex-end;
        }
        .message-bubble {
          padding: 10px 20px;
          border-radius: 20px;
          max-width: 70%;
          word-wrap: break-word;
          font-size: 16px;
          line-height: 1.4;
        }
        .user {
          background-color: #007bff;
          color: white;
          border-radius: 20px 20px 0 20px;
        }
        .assistant {
          background-color: #e5e5ea;
          color: black;
          border-radius: 20px 20px 20px 0;
        }
        .profile-pic {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 8px;
          align-self: flex-end;
        }
        .message-form {
          display: flex;
          padding: 10px;
          background: #fff;
          border-top: 1px solid #ccc;
        }
        .message-form input,
        .message-form button {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 20px;
        }
        .message-form input {
          flex-grow: 1;
          margin-right: 8px;
        }
        .message-form button {
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
