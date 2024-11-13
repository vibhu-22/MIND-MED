import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">MIND MED</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="hover:text-yellow-300">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
