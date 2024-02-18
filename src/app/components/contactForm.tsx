import React, { useState, ChangeEvent, FormEvent } from "react";

function MessageSender() {
  const [message, setMessage] = useState("");

  // Use ChangeEvent<HTMLTextAreaElement> for typing the event parameter of a textarea change handler
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // Use FormEvent<HTMLFormElement> for typing the event parameter of a form submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setMessage(""); // Reset message input after successful sending
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending the message.");
    }
  };

  return (
    <div className="message-sender">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Type your message here"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default MessageSender;
