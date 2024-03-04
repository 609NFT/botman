import React, { useState } from "react";

function ChatComponent() {
  const [message, setMessage] = useState(""); // User's message
  const [response, setResponse] = useState(""); // Server's response

  const sendMessage = async () => {
    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data.reply); // Update the UI with the response
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse("Failed to get a reply."); // Handle error case in the UI
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
      <div>Reply: {response}</div>
    </div>
  );
}

export default ChatComponent;
