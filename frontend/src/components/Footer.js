import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p>&copy; 2024 Yuot Cikom. All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="text-light me-3">
            GitHub
          </a>
          <a href="#" className="text-light me-3">
            LinkedIn
          </a>
          <a href="#" className="text-light">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
