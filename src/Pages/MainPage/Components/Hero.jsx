import React, { useState } from 'react';
import myImage from './myImage,.png'; // Ensure the path is correct

const Hero = ({ onGetStarted }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} h-screen flex items-center py-12 transition-colors duration-300 relative`}>
      
      {/* Dark Mode Toggle Button at the Top Right */}
      <button 
        className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-300 text-gray-900 hover:bg-gray-400'}`}
        onClick={toggleTheme}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left-aligned Image Section */}
        <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img 
            src={myImage} 
            alt="MindMed Hero"
            className="w-full h-auto md:max-w-2xl lg:max-w-3xl"
          />
        </div>

        {/* Right-aligned Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-blue-600">MINDMED</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            "Engage with our AI-powered chatbot for personalized mental health support. Access tailored coping strategies, mindfulness exercises, and instant relief tools to manage stress, anxiety, and emotional well-being, all in a safe, anonymous, and secure environment."
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 mr-4"
            onClick={onGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
