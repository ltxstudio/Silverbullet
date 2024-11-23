import { useState } from 'react';
import { generateResponse } from './api';
import { FaPaperPlane } from 'react-icons/fa'; // For the send icon
import { motion } from 'framer-motion'; // For animations

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return; // Don't send empty messages
    setChatHistory([...chatHistory, { user: true, text: userMessage }]);
    setUserMessage('');

    try {
      const response = await generateResponse(userMessage);
      const botReply = response?.data?.responseText || "Sorry, I couldn't get a response.";
      setChatHistory([...chatHistory, { user: true, text: userMessage }, { user: false, text: botReply }]);
    } catch (error) {
      setChatHistory([...chatHistory, { user: true, text: userMessage }, { user: false, text: "Sorry, there was an error." }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div 
        className="bg-white rounded-lg shadow-xl w-full sm:w-96 lg:w-1/2 xl:w-1/3"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 h-96 flex flex-col justify-between">
          <div className="space-y-4 overflow-y-auto h-full">
            {chatHistory.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-lg ${msg.user ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <p>{msg.text}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              onClick={handleSendMessage}
              className="p-3 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              disabled={!userMessage.trim()}
              whileTap={{ scale: 0.9 }}
            >
              <FaPaperPlane />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
