import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaUserLock, FaBolt } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Secure MERN Authentication App</h1>
          <p>
            A modern authentication system built with MongoDB, Express, React,
            and Node.js. Fast, secure, and designed with a professional user experience.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">
              Get Started
            </Link>
            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>JWT Authentication</h3>
            <p>
              Secure login system with protected routes and token-based authentication.
            </p>
          </div>

          <div className="feature-card">
            <FaUserLock className="feature-icon" />
            <h3>User Protection</h3>
            <p>
              Access control for private pages with auto logout on token expiry.
            </p>
          </div>

          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Modern Experience</h3>
            <p>
              Responsive UI, dark mode, remember me, loaders, and toast notifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;