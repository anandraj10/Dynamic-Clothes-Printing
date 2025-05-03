import { useState } from 'react';
import './login.css';

export default function GlassmorphicLogin() {
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(showRegister ? 'Registration successful!' : 'Login successful!');
  };

  return (
    <div id='login'>
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-800 via-violet-900 to-blue-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Glass login card */}
      <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 shadow-lg">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          {showRegister ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-white/70 text-center mb-8">
          {showRegister ? 'Register to get started' : 'Sign in to continue'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {showRegister && (
            <div>
              <label htmlFor="fullName" className="block text-white/90 text-sm font-medium mb-2">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="input-field"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white/90 text-sm font-medium mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {showRegister && (
            <div>
              <label htmlFor="confirmPassword" className="block text-white/90 text-sm font-medium mb-2">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="input-field"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {!showRegister && (
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-white/70">
                <input type="checkbox" className="mr-2 text-indigo-600" />
                Remember me
              </label>
              <a href="#" className="text-sm text-white hover:text-white/80">Forgot password?</a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            {showRegister ? 'Sign Up' : 'Sign In'}
          </button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setShowRegister(!showRegister)}
              className="font-medium text-white/70 hover:text-white transition"
            >
              {showRegister ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>

        {!showRegister && (
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/50">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {['G', 'GH', 'T'].map((label, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="w-full py-2 px-4 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
