import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p>&copy; 2024 Yuot Cikom. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
