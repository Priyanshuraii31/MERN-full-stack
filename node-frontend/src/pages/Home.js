import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaUserLock, FaBolt } from "react-icons/fa";
import StatsSection from "../components/StatsSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Modern MERN Authentication</span>
          <h1>Build Secure and Professional User Authentication</h1>
          <p>
            A modern authentication system built with MongoDB, Express, React,
            and Node.js. Clean UI, JWT protection, dark mode, and a better user experience.
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

      <StatsSection />

      <section className="features">
        <h2>Core Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>JWT Authentication</h3>
            <p>
              Secure login system with token-based authentication and protected routes.
            </p>
          </div>

          <div className="feature-card">
            <FaUserLock className="feature-icon" />
            <h3>Protected User Access</h3>
            <p>
              Private pages are secured with route protection, remember me, and auto logout.
            </p>
          </div>

          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Modern Frontend Experience</h3>
            <p>
              Dark mode, responsive cards, toast alerts, loaders, and a clean dashboard UI.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to explore the app?</h2>
        <p>Sign up now and experience a complete MERN authentication flow.</p>
        <Link to="/signup" className="primary-btn">
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default Home;