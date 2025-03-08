"use client"
import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import '../../css/login.css'; 

const page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simulate auth - replace with actual Firebase integration later
    try {
      // Basic validation
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }
      if (!isLogin && !name) {
        throw new Error('Please enter your name');
      }
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Simulate API call
      console.log('Form submitted:', { email, password, name, isLogin });
      // Here you would typically make API calls to your auth endpoints
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Simulate Google sign in
      console.log('Google sign in clicked');
      // Here you would integrate with Google Auth
    } catch (err) {
      setError('Google sign in failed. Please try again.');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      // Simulate Facebook sign in
      console.log('Facebook sign in clicked');
      // Here you would integrate with Facebook Auth
    } catch (err) {
      setError('Facebook sign in failed. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-content">
          <h1 className="auth-title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <div className="auth-social-buttons">
            <button
              onClick={handleGoogleSignIn}
              className="auth-social-button google"
            >
              <svg className="auth-social-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              onClick={handleFacebookSignIn}
              className="auth-social-button facebook"
            >
              <svg className="auth-social-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              Continue with Facebook
            </button>

            <div className="auth-divider">
              <div className="auth-divider-line"></div>
              <span className="auth-divider-text">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="auth-form-group">
                <label className="auth-form-label">Name</label>
                <div className="auth-input-wrapper">
                  <User className="auth-input-icon" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="auth-input"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div className="auth-form-group">
              <label className="auth-form-label">Email</label>
              <div className="auth-input-wrapper">
                <Mail className="auth-input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label className="auth-form-label">Password</label>
              <div className="auth-input-wrapper">
                <Lock className="auth-input-icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-button">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="auth-switch">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="auth-switch-button"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;