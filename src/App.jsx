import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa"; // For loading spinner

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl =
    "https://api.cloudflare.com/client/v4/accounts/e0c371248ae87e4e5b90c02c7fb9be9e/ai/run/@cf/meta/llama-3-8b-instruct";

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user's message to the chat
    setMessages([...messages, { role: "user", content: userMessage }]);
    setUserMessage("");
    setLoading(true);

    try {
      // Send POST request to Cloudflare API
      const response = await axios.post(
        apiUrl,
        {
          messages: [
            {
              role: "system",
              content: "You are a friendly assistant that helps write stories",
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
        },
        {
          headers: {
            Authorization: "Bearer bMl31L0QrmQLMsc93Cbgx5gmPpIi5gaWgE_8QYFw", // Replace with your API token
          },
        }
      );

      // Check if the response is valid
      if (response.data && response.data.result && response.data.result.message) {
        const aiResponse = response.data.result.message.content;
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: aiResponse },
        ]);
      } else {
        throw new Error("Invalid response format from Cloudflare API");
      }
    } catch (error) {
      // More detailed error handling
      console.error("Error communicating with the Cloudflare AI API:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content: `Error: Server responded with status ${error.response.status}. ${error.response.data?.message || error.message}`,
          },
        ]);
      } else if (error.request) {
        // The request was made but no response was received
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "Error: No response received from the server." },
        ]);
      } else {
        // Something went wrong in setting up the request
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: `Error: ${error.message || "Something went wrong."}` },
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 flex flex-col h-[75vh] overflow-hidden">
          <div className="flex-grow overflow-auto space-y-4 px-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end rounded-br-none"
                    : "bg-gray-300 text-gray-800 self-start rounded-bl-none"
                }`}
              >
                <p>{msg.content}</p>
              </div>
            ))}
          </div>

          {/* Input and Send Button Section */}
          <div className="flex items-center mt-4 border-t pt-4 space-x-4">
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
              className="p-3 rounded-full bg-blue-500 text-white disabled:bg-blue-300"
            >
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
