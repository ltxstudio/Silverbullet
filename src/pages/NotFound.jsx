import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      {/* Animation */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-red-500 animate-bounce relative z-10 shadow-xl"></div>
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-opacity-50 bg-red-400 animate-pulse z-0"></div>
      </div>
      
      {/* 404 Content */}
      <div className="text-center mt-8">
        <h1 className="text-6xl md:text-8xl font-extrabold text-red-600 mb-4 drop-shadow-lg">404</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          It might have been moved or deleted.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
