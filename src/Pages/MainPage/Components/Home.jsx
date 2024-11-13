import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'User';

  return (
    <div className="p-6 relative h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome, {username}!</h1>
      <p className="text-lg mb-6">You have successfully logged in.</p>

      {/* Floating logout button */}
      <button
        onClick={() => navigate('/')}
        className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg"
      >
        Logout
      </button>

      {/* Chatbot Widget */}
      <div className="relative w-full h-full">
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/13/08/20241113082403-5FILM8N2.json"
          title="Chatbot"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-0 rounded-lg shadow-lg z-10"
        />

        {/* Large Image Overlaying the Right Side of the Chatbot */}
        <div className="absolute centre-2 right-10 w-1/4 h-full z-20">
          <img
            src="./myImage,.png';"
            alt="AI Face"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
