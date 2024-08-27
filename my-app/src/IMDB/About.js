import React from 'react';
import my from './142531.jpg'
// Assuming you have Tailwind CSS setup

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-200 text-gray-800 flex flex-col items-center justify-center">
      <div className="text-center p-8">
        <img
          src={my} // Replace with the path to your image
          alt="me"
          className="w-56 h-56 rounded-full mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">About This Movie Website</h1>
        <p className="text-lg mb-4">
          This movie website was created by Altaf Ptale as part of a project to enhance frontend and user interface skills using React. The site utilizes dummy data to simulate real-world functionality and provide a seamless user experience.
        </p>
        <p className="text-lg mb-4">
          The primary purpose of this website is to showcase various features and design techniques in React, including creating a dynamic and interactive user interface. The project serves as a practical exercise for skill development in frontend development and UI design.
        </p>
        <p className="text-lg">
          We hope you find this project insightful and useful for understanding the concepts of React and modern web development practices.
        </p>
      </div>
    </div>
  );
};

export default About;
