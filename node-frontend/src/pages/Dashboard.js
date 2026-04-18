import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaShieldAlt,
  FaClock,
  FaUserCircle,
  FaArrowRight
} from "react-icons/fa";
import { getToken, getUserEmail, clearAuth, isTokenExpired } from "../utils/auth";
import Loader from "../components/Loader";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState({
    email: getUserEmail() || "",
  });
  const [loading, setLoading] = useState(true);

  const recentActivities = [
    "Logged in successfully",
    "Profile security verified",
    "Protected route accessed",
    "Theme preferences loaded"
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      const token = getToken();

      if (!token || isTokenExpired(token)) {
        clearAuth();
        window.location.href = "/login";
        return;
      }

      try {
        const res = await axios.get(
          "https://mern-full-stack-prcf.onrender.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            timeout: 10000,
          }
        );

        setUser(res.data.user);
      } catch (error) {
        console.log(error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <Loader text="Fetching your dashboard..." />;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-hero">
          <h1>Welcome back</h1>
          <p>Manage your account, review activity, and access protected features.</p>
        </div>

        <div className="dashboard-grid top-grid">
          <div className="widget-card">
            <div className="widget-icon"><FaEnvelope /></div>
            <div>
              <h4>Email</h4>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="widget-card">
            <div className="widget-icon"><FaShieldAlt /></div>
            <div>
              <h4>Security</h4>
              <p>JWT Protected</p>
            </div>
          </div>

          <div className="widget-card">
            <div className="widget-icon"><FaClock /></div>
            <div>
              <h4>Session</h4>
              <p>Active</p>
            </div>
          </div>

          <div className="widget-card">
            <div className="widget-icon"><FaUserCircle /></div>
            <div>
              <h4>Role</h4>
              <p>User</p>
            </div>
          </div>
        </div>

        <div className="dashboard-layout">
          <div className="dashboard-main-card">
            <h2>Account Overview</h2>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Status:</strong> Logged in</p>
            <p><strong>Access:</strong> Protected Route</p>
            <p><strong>Session:</strong> Active and verified</p>

            <div className="dashboard-actions">
              <Link to="/profile" className="dashboard-btn primary-btn-dashboard">
                View Profile
              </Link>
              <Link to="/" className="dashboard-btn secondary-btn-dashboard">
                Go Home
              </Link>
            </div>
          </div>

          <div className="activity-card">
            <h2>Recent Activity</h2>

            <div className="activity-list">
              {recentActivities.map((item, index) => (
                <div className="activity-item" key={index}>
                  <span className="activity-dot"></span>
                  <div>
                    <p>{item}</p>
                    <small>Just now</small>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/profile" className="activity-link">
              Open Profile <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;