import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🎯</span>
              <div>
                <div className="logo-name">Target Coaching Classes</div>
                <div className="logo-tagline">Excellence in Education</div>
              </div>
            </div>
            <p className="footer-desc">
              Guided by Vishal Verma, Target Coaching Classes has been shaping the academic future 
              of students in classes 9–12 with focused teaching in Science and Mathematics.
            </p>
            <div className="footer-contact-info">
              <div className="info-item">📞 <span>+91 98765 XXXXX</span></div>
              <div className="info-item">📧 <span>vishalverma@gmail.com</span></div>
              <div className="info-item">📍 <span>Gorakhpur, Uttar Pradesh</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/batches">Batch Schedule</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Subjects */}
          <div className="footer-col">
            <h4>Subjects Offered</h4>
            <ul>
              <li>📐 Mathematics (9–12)</li>
              <li>⚡ Physics (9–12)</li>
              <li>🧪 Chemistry (9–12)</li>
              <li>🌿 Biology (11–12)</li>
            </ul>
          </div>

          {/* Classes */}
          <div className="footer-col">
            <h4>Classes</h4>
            <ul>
              <li>🎓 Class 9 – Science & Math</li>
              <li>🎓 Class 10 – Board Prep</li>
              <li>🎓 Class 11 – Foundation</li>
              <li>🎓 Class 12 – Board + Competitive</li>
            </ul>
            <div className="footer-badge">
              <span>Admissions Open 2025-26</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} Target Coaching Classes. All rights reserved.</p>
          <p>Designed with ❤️ for academic excellence | By Vishal Verma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
