import React, { useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import About from './Components/About';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';
import Login from "./Components/Login";

const Frontpage = ({ onLoginClose }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
    if (onLoginClose) onLoginClose(); // Call the function from main.jsx if provided
  };

  return (
    <div className="relative z-10">
      <Header />
      <Hero onGetStarted={handleLoginOpen} /> {/* Pass handleLoginOpen to Hero */}
      <Feature id="features" />
      <About id="about" />
      <ContactSection id="contact" />
      <Footer />

      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-4 right-4 text-xl" onClick={handleLoginClose}>
              &times;
            </button>
            <Login onClose={handleLoginClose} /> {/* Pass onClose if Login needs it */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Frontpage;
