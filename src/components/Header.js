import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <nav>
        <div className="logo">
          <img
            src="logo.jpg"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="home" smooth={true} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} onClick={toggleMenu}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;







