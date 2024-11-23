import React, { useState } from 'react';
import { runAI } from './cloudflareAPI';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update chat with user input
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: input }
    ]);

    // Send request to Cloudflare AI
    const response = await runAI('@cf/meta/llama-3-8b-instruct', {
      messages: [
        {
          role: 'system',
          content: 'You are a friendly assistant that helps write stories',
        },
        ...messages,
        { role: 'user', content: input },
      ],
    });

    // Update chat with AI response
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'assistant', content: response?.choices?.[0]?.message?.content || 'No response' }
    ]);

    // Clear the input field
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
