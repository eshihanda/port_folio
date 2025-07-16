import React from 'react';
import './Styles/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section text-dark text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-3">
          Handcrafted by <strong>Monica Eshihanda</strong> © {new Date().getFullYear()}
        </p>
        <div className="social-icons d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="https://github.com/eshihanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/monicah-wamaya-89913714a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://x.com/MEshihanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="eshihandamonn@gmail.com"
            className="text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
