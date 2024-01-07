import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css';

function FooterComponent() {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container text-center">
        <span className="footer-text">
          &copy; 2024 Your Website Name. All rights reserved.
          <div className="social-icons mt-3">
            <a href="https://wa.me/6289523355547" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon" size="4x" />
            </a>
            <a href="https://www.instagram.com/irfn.hbbi?igsh=MXBzZGI3eG5tYW1jZw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" size="4x" />
            </a>
            <a href="https://github.com/IrfanHabibi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" size="4x"  />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;
