import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeContext";
import { clearAuth, getToken } from "../utils/auth";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = getToken();
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    clearAuth();
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h2 className="logo">MERN Auth</h2>
      </Link>

      <div className="nav-links">
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "Light" : "Dark"}
        </button>

        {!token ? (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
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