import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

// Custom inline SVG icons because current lucide-react doesn't export brand icons

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    { icon: <LinkedinIcon size={20} />, url: 'https://www.linkedin.com/in/akshaya-k-s-46a2a5320', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:ksakshaya.03.28@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer glass-panel">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <span>Akshaya</span><span className="logo-dot">.bio</span>
          </a>
          <p className="footer-tagline">Building modern biotechnological and life sciences solutions.</p>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="social-icon-btn"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Akshaya K S. All rights reserved. Created with React & TypeScript.</p>
      </div>
    </footer>
  );
};
