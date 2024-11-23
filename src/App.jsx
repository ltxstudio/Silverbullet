import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user's message to the chat
    setMessages([...messages, { role: "user", content: userMessage }]);
    setUserMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudflare.com/client/v4/accounts/e0c371248ae87e4e5b90c02c7fb9be9e/ai/run/@cf/meta/llama-3-8b-instruct",
        {
          messages: [
            { role: "system", content: "You are a friendly assistant that helps write stories" },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            Authorization: "Bearer bMl31L0QrmQLMsc93Cbgx5gmPpIi5gaWgE_8QYFw",
          },
        }
      );

      const aiResponse = response.data.result.message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Error communicating with the API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 flex flex-col h-[75vh] overflow-hidden">
          <div className="flex-grow overflow-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-gray-800 self-start"}`}
              >
                <p>{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-4 border-t pt-4">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="ml-4 p-3 rounded-full bg-blue-500 text-white disabled:bg-blue-300"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
