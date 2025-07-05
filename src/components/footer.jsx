import React from 'react';

const Footer = () => {
  return (
    <footer className="gaming-footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-sections">
            {/* Brand Section */}
            <div className="footer-section">
              <div className="footer-brand">
                <h3 className="footer-title">
                  <span className="brand-text">Game</span>
                  <span className="brand-accent">Nexus</span>
                </h3>
                <p className="footer-description">
                  Your ultimate destination for gaming news, reviews, and community.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/news" className="footer-link">News</a></li>
                <li><a href="/reviews" className="footer-link">Reviews</a></li>
                <li><a href="#" className="footer-link">About Us</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h4 className="footer-heading">Categories</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Action</a></li>
                <li><a href="#" className="footer-link">RPG</a></li>
                <li><a href="#" className="footer-link">Racing</a></li>
                <li><a href="#" className="footer-link">Strategy</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h4 className="footer-heading">Connect With Us</h4>
              <div className="social-links">
                <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🧵</span>
                  <span className="social-text">Threads</span>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📷</span>
                  <span className="social-text">Instagram</span>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📺</span>
                  <span className="social-text">YouTube</span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐦</span>
                  <span className="social-text">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 Game Nexus Corp Ltd. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                <a href="#" className="footer-bottom-link">Terms of Service</a>
                <a href="#" className="footer-bottom-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;