// pages/login.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../../css/login.css'; // Corrected import statement

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="container">
      <Head>
        <title>SOA | Login</title>
        <meta name="description" content="Red. learning platform login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="card">
          <div className="logoContainer">
            <div className="logo">
              <div className="logoCircle"></div>
              <span className="logoText">SOA.</span>
            </div>
            <div className="socialIcons">
              <div className="iconCircle">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 2H6C3.79086 2 2 3.79086 2 6V14C2 16.2091 3.79086 18 6 18H14C16.2091 18 18 16.2091 18 14V6C18 3.79086 16.2091 2 14 2Z" stroke="#333" fill="none" stroke-width="1.5"/>
  <circle cx="10" cy="10" r="4" stroke="#333" fill="none" strokeWidth="1.5"/>
  <circle cx="15" cy="5" r="1" fill="#333"/>
</svg>
              </div>
              <div className="iconCircle darkIcon">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 4L8.7 9.35C8.3 9.6 7.7 9.6 7.3 9.35L2 5.6" stroke="white" fill="none" stroke-width="1.5"/>
  <path d="M16 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3Z" stroke="white" fill="none" stroke-width="1.5"/>
</svg>
              </div>
            </div>
          </div>

          <div className="formSection">
            <div className="illustrationContainer">
              <div className="illustration">
              <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">

  <rect x="175" y="200" width="80" height="100" fill="#FFDA79"/>
  <rect x="80" y="240" width="60" height="60" fill="#FFDA79"/>
  <rect x="380" y="200" width="80" height="100" fill="#FFDA79"/>
  
 
  <path d="M80 240 L175 240" stroke="#333" stroke-width="2"/>
  <path d="M255 240 L380 240" stroke="#333" stroke-width="2"/>

  <path d="M100 230 Q130 200 130 230" stroke="#333" fill="none" stroke-width="2"/>
  <polygon points="100,230 110,225 105,235" fill="#333"/>
  
  
  <ellipse cx="220" cy="180" rx="20" ry="25" fill="#333"/> 
  <rect x="210" y="200" width="20" height="40" fill="#333"/> 
  <path d="M210 205 L180 230" stroke="#333" stroke-width="10" stroke-linecap="round"/> 
  <path d="M230 205 L330 230" stroke="#e86f37" stroke-width="10" stroke-linecap="round"/>
  <path d="M210 240 L190 280" stroke="#333" stroke-width="10" stroke-linecap="round"/> 
  <path d="M230 240 L250 280" stroke="#333" stroke-width="10" stroke-linecap="round"/> 
</svg>



              </div>
            </div>

            <div className="formContainer">
              <div className="formHeader">
                <h1 className="title">Sign Up Here</h1>
                <p className="subtitle">Please login or sign up to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="form">
                <div className="inputGroup">
                  <div className="inputContainer">
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 3.5H3C2.17157 3.5 1.5 4.17157 1.5 5V15C1.5 15.8284 2.17157 16.5 3 16.5H17C17.8284 16.5 18.5 15.8284 18.5 15V5C18.5 4.17157 17.8284 3.5 17 3.5Z" stroke="#888" fill="none" stroke-width="1.5"/>
                      <path d="M2 5L10 10L18 5" stroke="#888" fill="none" stroke-width="1.5"/>
                    </svg>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div className="inputContainer">
                 
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 9H5C4.44772 9 4 9.44772 4 10V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16V10C16 9.44772 15.5523 9 15 9Z" stroke="#888" fill="none" stroke-width="1.5"/>
                    <path d="M6 9V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V9" stroke="#888" fill="none" stroke-width="1.5"/>
                    <circle cx="10" cy="13" r="1.5" fill="#888"/>
                        </svg>

                    <input
                      type="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="signUpButton">
                  Sign Up
                </button>
                
                <button type="button" className="googleButton">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.76 10.23c0-.67-.06-1.34-.17-1.99H10.1v3.75h5.42a4.63 4.63 0 0 1-2.01 3.03v2.52h3.26c1.91-1.75 3-4.34 3-7.31z" fill="#4285F4"/>
  <path d="M10.1 20c2.73 0 5.02-.9 6.68-2.46l-3.26-2.52c-.9.6-2.06.96-3.42.96-2.63 0-4.86-1.77-5.66-4.16h-3.36v2.6C2.73 17.75 6.14 20 10.1 20z" fill="#34A853"/>
  <path d="M4.44 11.82c-.2-.6-.32-1.24-.32-1.9s.12-1.3.32-1.9V5.42H1.08A9.97 9.97 0 0 0 0 10.08c0 1.62.39 3.16 1.08 4.52l3.36-2.78z" fill="#FBBC05"/>
  <path d="M10.1 3.86c1.48 0 2.8.51 3.85 1.5l2.9-2.88C15.15.92 12.86 0 10.1 0 6.14 0 2.73 2.24 1.08 5.42l3.36 2.6c.8-2.39 3.03-4.16 5.66-4.16z" fill="#EA4335"/>
</svg>
                  Google
                </button>
                
                <div className="loginLink">
                  Already Have An Account? <a href="#">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}