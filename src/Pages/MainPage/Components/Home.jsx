import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'User';

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome, {username}!</h1>
      <p className="text-lg">You have successfully logged in.</p>
      <button 
        onClick={() => navigate('/')}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
