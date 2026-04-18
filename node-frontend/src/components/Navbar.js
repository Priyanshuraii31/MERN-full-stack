import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { clearAuth, getToken } from "../utils/auth";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = getToken();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    clearAuth();
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <h2 className="logo">MERN Auth</h2>
      </Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button
          onClick={toggleTheme}
          className="theme-btn"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {!token ? (
          <>
            <Link to="/signup" onClick={closeMenu}>Signup</Link>
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
            <Link to="/profile" onClick={closeMenu}>Profile</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;