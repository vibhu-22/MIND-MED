import React from 'react';
import myImage from './myImage,.png'; // Ensure the path is correct

const Hero = ({ onGetStarted }) => {
  return (
    <section className="bg-white h-screen flex items-center py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left-aligned Image Section */}
        <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img 
            src={myImage} 
            alt="MindMed Hero"
            className="w-full h-auto   md:max-w-2xl lg:max-w-3xl" // Increase the max-width for larger screens
          />
        </div>

        {/* Right-aligned Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">MINDMED</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            "Engage with our AI-powered chatbot for personalized mental health support. Access tailored coping strategies, mindfulness exercises, and instant relief tools to manage stress, anxiety, and emotional well-being, all in a safe, anonymous, and secure environment."
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
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
