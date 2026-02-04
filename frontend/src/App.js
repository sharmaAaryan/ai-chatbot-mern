import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setReply(data.reply);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Chatbot 🤖</h1>

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button
        onClick={sendMessage}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Send
      </button>

      <p><strong>AI:</strong> {reply}</p>
    </div>
  );
}

export default App;
