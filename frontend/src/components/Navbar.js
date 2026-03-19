import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/batches', label: 'Batches' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">🎯</div>
          <div className="logo-text">
            <span className="logo-name">Target Coaching</span>
            <span className="logo-name text-center">Classes</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={path === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="navbar-cta btn btn-primary">
          Enquire Now
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                end={path === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-cta btn btn-primary" onClick={() => setMenuOpen(false)}>
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
