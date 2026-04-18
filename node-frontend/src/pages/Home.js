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
          <span className="hero-badge">Professional MERN Authentication</span>

          <h1>Secure, Modern and Portfolio-Ready Auth Website</h1>

          <p>
            A complete MERN authentication platform with signup, login, JWT
            protection, dashboard, profile page, dark mode, remember me,
            auto logout and polished user experience.
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
            <h3>JWT Security</h3>
            <p>
              User authentication with protected routes and secure access control.
            </p>
          </div>

          <div className="feature-card">
            <FaUserLock className="feature-icon" />
            <h3>User Protection</h3>
            <p>
              Remember me, profile page, auto logout and session-based handling.
            </p>
          </div>

          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Modern UI</h3>
            <p>
              Dark mode, toast notifications, loaders, responsive cards and premium layout.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>Why this project stands out</h2>
          <p>
            This project is not just a simple login form. It is designed like a
            real-world web application with modern UX, security logic, route protection
            and clean frontend structure.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to explore?</h2>
        <p>Create your account and test the full authentication flow.</p>
        <Link to="/signup" className="primary-btn">
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default Home;