import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>MERN Auth</h3>
        <p>Secure authentication app built with MongoDB, Express, React, and Node.js.</p>

        <div className="footer-icons">
          <a
            href="https://github.com/Priyanshuraii31/MERN-full-stack"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <p className="footer-bottom">
          Made with <FaHeart className="heart-icon" /> by Priyanshu Rai
        </p>
      </div>
    </footer>
  );
};

export default Footer;