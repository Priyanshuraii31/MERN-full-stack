import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState({
    email: localStorage.getItem("userEmail") || "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

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
        localStorage.setItem("userEmail", res.data.user.email);
      } catch (error) {
        console.log(error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p><strong>Email:</strong> {user?.email || "Loading..."}</p>
        <p>
          <strong>Status:</strong>{" "}
          {loading ? "Connecting to server..." : "Logged in"}
        </p>
        <p><strong>Access:</strong> Protected Route</p>
      </div>
    </div>
  );
};

export default Dashboard;