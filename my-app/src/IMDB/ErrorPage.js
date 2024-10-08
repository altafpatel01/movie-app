import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorPage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className={`bg-white p-10 rounded-xl  ${message ? 'animate-fadeIn' : ''}`}>
        <FaExclamationTriangle className="w-20 h-20 text-red-600" />
        <h1 className="mt-6 text-3xl font-bold text-gray-800">Oops!</h1>
        <p className="mt-2 text-lg text-red-500">{message}</p>
        <div className="mt-8">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ErrorPage;
