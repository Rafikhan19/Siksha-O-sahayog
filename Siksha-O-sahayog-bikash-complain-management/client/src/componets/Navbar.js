"use client"
import React, { useState } from 'react'
import '../css/navbar.css'
import Link from 'next/link'
const Navbar = () => {
    const [isLogin,setIsLogin]=useState(false)
  return (
    
          <header id="header" className="header ">
    <div className="header-container ">

      <Link href="/" className="logo">
        <img src="assets/img/logo.png" alt="xyz" />
        <h1 className="sitename">Siksha &apos;O&apos; Sahayog</h1>
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#services">Services</a></li>
          <li><Link href="/complain-management">Complain Management</Link></li>
          <li><a href="#pricing">Pricing</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle "></i>
      </nav>
      {isLogin?(
              <button className="btn-getstarted" href="#about">Get Started</button>


      ):(
        <div className='auth-Button'>
            <Link href="/login">
            <span className="btn-login" >Login</span>
            </Link>
        <span className="btn-signup" >Sign up</span>
            </div>


      )}


    </div>
  </header>
      
    
  )
}

export default Navbar
