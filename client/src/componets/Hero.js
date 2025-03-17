import React from 'react';
import '../css/hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-background">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/57713a8e2994cae381dd86fe/1543925384526-GNBBO11VDMAKDWGOTDEJ/1-5.jpg" 

          alt="Hero Background" 
          className="hero-bg-image" 
        />
      </div>
      
      <div className="container position-relative">
        <div className="hero-content text-center text-md-start">
          <div className="company-badge">
            <i className="bi bi-gear-fill me-2"></i>
            <span>Working for your success</span>
          </div>

          <h1 className="hero-title">
            Maecenas Vitae <br />
            Consectetur Led <br />
            <span className="accent-text">Vestibulum Ante</span>
          </h1>

          <p className="hero-description">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">Get Started</a>
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn btn-outline glightbox">
              <i className="bi bi-play-circle me-2"></i>
              Play Video
            </a>
          </div>
          
          <div className="customers-badge">
            <div className="customer-avatars">
              <img src="assets/img/avatar-1.webp" alt="Customer 1" className="avatar" />
              <img src="assets/img/avatar-2.webp" alt="Customer 2" className="avatar" />
              <img src="assets/img/avatar-3.webp" alt="Customer 3" className="avatar" />
              <img src="assets/img/avatar-4.webp" alt="Customer 4" className="avatar" />
              <img src="assets/img/avatar-5.webp" alt="Customer 5" className="avatar" />
              <span className="avatar more">12+</span>
            </div>
            <p className="mb-0 mt-2">12,000+ lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <div className="stat-content">
                <h4>3x</h4>
                <p>Won Awards</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <div className="stat-content">
                <h4>6.5k</h4>
                <p>Faucibus</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <div className="stat-content">
                <h4>80k</h4>
                <p>Mauris</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-award"></i>
              </div>
              <div className="stat-content">
                <h4>6x</h4>
                <p>Phasellus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;