import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { login, register } from '../utils/auth';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('asdf@test.com');
  const [password, setPassword] = useState('}hT+@x3M8Bd9');

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = (location.state as { redirectTo?: string })?.redirectTo;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password);
      }

      navigate(redirectTo ?? '/dashboard', { replace: true });
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
          <Lock size={48} className="text-dark-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-dark-text">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-dark-text font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-gray-700 text-dark-text border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-dark-text font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 bg-gray-700 text-dark-text border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-dark-primary text-dark-bg py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center text-dark-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            className="text-dark-primary font-semibold ml-1"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;