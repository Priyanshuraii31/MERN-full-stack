import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">MERN Auth</h2>

      <div className="nav-links">
        {!token ? (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
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