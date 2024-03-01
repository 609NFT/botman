import React, { useState, FormEvent } from "react";
import axios from "axios";

const ChatComponent = () => {
  const [messages, setMessages] = useState<
    Array<{ sender: string; text: string }>
  >([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = { sender: "User", text: userInput.trim() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await axios.post("/api/chat", {
        message: userInput.trim(),
      });
      const assistantMessage = {
        sender: "Assistant",
        text: response.data.message,
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      // Optionally handle errors, e.g., show an error message
    }

    setUserInput(""); // Clear the input field
  };

  return (
    <div>
      {/* Chat messages and input field */}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ width: "calc(100% - 100px)", marginRight: "10px" }}
          placeholder="Type your message here..."
        />
        <button type="submit" style={{ width: "80px" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
