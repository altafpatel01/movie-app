import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-delay-100"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-delay-200"></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loader;