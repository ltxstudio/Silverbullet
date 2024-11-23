import { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle message send
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Don't send empty messages

    // Add user message to chat
    setChat((prev) => [
      ...prev,
      { from: 'user', text: message },
    ]);

    setLoading(true);

    try {
      // API call to Gemini (using the provided curl command structure)
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBTqU2RlwJjT4dm3I-hRlTsOVedxR4wINU',
        {
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const aiResponse = response.data.contents[0].parts[0].text;

      // Add AI response to chat
      setChat((prev) => [
        ...prev,
        { from: 'ai', text: aiResponse },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setChat((prev) => [
        ...prev,
        { from: 'ai', text: 'Sorry, there was an error.' },
      ]);
    } finally {
      setMessage('');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-4 px-6">
      <h1 className="text-2xl font-semibold mb-4">AI Chat</h1>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4 mb-4 overflow-hidden">
        <div className="chat-window space-y-4 max-h-80 overflow-y-auto mb-4">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`message p-2 rounded-lg ${msg.from === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800'}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          {loading && (
            <div className="message p-2 rounded-lg bg-gray-200 text-gray-800">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={sendMessage} className="flex w-full max-w-2xl">
        <input
          type="text"
          className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
