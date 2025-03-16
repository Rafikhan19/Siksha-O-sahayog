"use client";
import React, { useState } from "react";
import "../css/navbar.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <Image src="/assets/img/logo.png" alt="logo" width={36} height={36} />
          <h1 className="sitename">Siksha 'O' Sahayog</h1>
        </a>

        {/* Navigation */}
        <nav id="navmenu" className={`navmenu ${isOpen ? "mobile-nav-active" : ""}`}>
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#pricing">Notice</a></li>
            <li><a href="#club">Clubs</a></li>
            <li><a href="#ebook">eBooks</a></li>
            <li><a href="#complaint">Complaints</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Mobile Dropdown Menu */}
        {/* {isOpen && (
          <ul className="mobile-dropdown">
            <li><a href="#hero">Home</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#pricing">Notice</a></li>
            <li><a href="#club">Clubs</a></li>
            <li><a href="#ebook">eBooks</a></li>
            <li><a href="#complaint">Complaints</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )} */}

        {/* Auth Buttons */}
        {isLogin ? (
          <button className="btn-getstarted">Get Started</button>
        ) : (
          <div className="auth-Button">
            <Link href="/login"><span className="btn-login">Login</span></Link>
            <span className="btn-signup">Sign up</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
