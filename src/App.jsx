import React from 'react';
import Chatbot from './Chatbot';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-xl p-6">
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
