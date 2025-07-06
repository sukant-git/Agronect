import React, { useState } from "react";
import "./Chatbot.css";

import faqs from "./faqs";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const getResponse = (text) => {
    const lower = text.toLowerCase().trim();

    // Greeting detection
    const greetings = ["hi", "hello", "hey"];
    if (greetings.includes(lower)) {
      return "Hi! 👋 Welcome to our Agri Assistant 🌱. How can I help you today?";
    }

    // FAQ lookup
    const found = faqs.find((faq) =>
      faq.keywords.some((kw) => lower.includes(kw))
    );

    return found
      ? found.answer
      : "Sorry, I don't have info on that yet. Try asking about crops, watering, vitamins, or pests.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { type: "user", text: input };
    const botResponse = { type: "bot", text: getResponse(input) };
    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        🤖
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">🌿 Agri Assistant</div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.type === "user" ? "chat-user" : "chat-bot"}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask something about farming..."
            />
            <button onClick={handleSend}> ↑</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
