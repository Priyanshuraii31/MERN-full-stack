import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, getUserEmail, clearAuth, isTokenExpired } from "../utils/auth";
import Loader from "../components/Loader";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState({
    email: getUserEmail() || "",
  });
  const [loading, setLoading] = useState(true);

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
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p><strong>Email:</strong> {user?.email || "Loading..."}</p>
        <p><strong>Status:</strong> Logged in</p>
        <p><strong>Access:</strong> Protected Route</p>
      </div>
    </div>
  );
};

export default Dashboard;