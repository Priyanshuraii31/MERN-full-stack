import React from "react";
import { FaGithub, FaHeart, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <h3>MERN Auth</h3>
            <p>
              Secure authentication app with JWT, protected routes, dark mode,
              profile page, and modern UI.
            </p>
          </div>

          <div className="footer-tech">
            <span><SiMongodb /> MongoDB</span>
            <span><SiExpress /> Express</span>
            <span><FaReact /> React</span>
            <span><FaNodeJs /> Node.js</span>
          </div>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Priyanshuraii31/MERN-full-stack"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
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