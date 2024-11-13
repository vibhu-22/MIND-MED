import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-blue-500 mb-2">MINDMED</h3>
            <p className="text-gray-400 text-lg">
              Your trusted AI companion for mental health support and wellness.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.facebook.com" // Replace with your Facebook link
              className="transition-transform transform hover:scale-125 hover:text-blue-500"
              aria-label="Facebook"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-f"></i> {/* Facebook Icon */}
            </a>
            <a
              href="https://www.twitter.com" // Replace with your Twitter link
              className="transition-transform transform hover:scale-125 hover:text-blue-400"
              aria-label="Twitter"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a
              href="https://www.instagram.com" // Replace with your Instagram link
              className="transition-transform transform hover:scale-125 hover:text-pink-500"
              aria-label="Instagram"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i> {/* Instagram Icon */}
            </a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} MIND MED. &#169; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
