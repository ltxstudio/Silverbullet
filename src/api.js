import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY; // Retrieve the API key from environment variables
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export const generateResponse = async (userMessage) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        prompt: userMessage,
        temperature: 0.7, // Controls randomness. You can adjust this value as needed
        maxOutputTokens: 150, // The maximum number of tokens (words/characters) for the response
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating response: ", error);
    throw new Error("Failed to generate response");
  }
};
