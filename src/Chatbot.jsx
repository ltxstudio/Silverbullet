import React, { useState } from 'react';
import { runAI } from './cloudflareAPI';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent submitting empty messages

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: input },
    ]);
    setLoading(true);

    const response = await runAI('@cf/meta/llama-3-8b-instruct', {
      messages: [
        {
          role: 'system',
          content: 'You are a friendly assistant that helps write stories.',
        },
        ...messages,
        { role: 'user', content: input },
      ],
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'assistant', content: response?.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.' },
    ]);
    setLoading(false);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">AI Chatbot</h1>
      <div className="bg-gray-100 p-4 rounded-lg max-h-[400px] overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.role === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300'
            }`}
          >
            <strong className="block">{msg.role === 'user' ? 'You' : 'Assistant'}:</strong>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && (
          <div className="text-gray-600 text-center">
            <p>Assistant is typing...</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Ask something..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
