import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [username, setUsername] = useState(''); // Username for Login or Sign Up
  const [createUsername, setCreateUsername] = useState(''); // Username for Sign Up
  const [password, setPassword] = useState(''); // Password
  const navigate = useNavigate();

  // Toggle between Login and Sign Up
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setCreateUsername('');
    setPassword('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalUsername = isLogin ? username : createUsername;
    if (finalUsername && password) {
      navigate('/home', { state: { username: finalUsername } }); // Redirect to Home with username
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username field for Login */}
        {isLogin && (
          <div>
            <label className="block mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
        )}

        {/* Create Username field only for Sign Up */}
        {!isLogin && (
          <div>
            <label className="block mb-2">Create Username</label>
            <input 
              type="text" 
              value={createUsername}
              onChange={(e) => setCreateUsername(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
        )}

        {/* Email field only for Sign Up */}
        {!isLogin && (
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
        )}

        {/* Phone Number field only for Sign Up */}
        {!isLogin && (
          <div>
            <label className="block mb-2">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded" required />
          </div>
        )}

        {/* Password field */}
        <div>
          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded" 
            required 
          />
        </div>

        {/* Submit Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {/* Toggle between Login and Sign Up */}
      <div className="mt-4">
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'} 
          <button 
            onClick={toggleMode} 
            className="text-blue-600 hover:underline ml-2"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
