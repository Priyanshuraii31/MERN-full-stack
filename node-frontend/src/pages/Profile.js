import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import "./Dashboard.css";

const Profile = () => {
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

  if (loading) {
    return <Loader text="Loading your profile..." />;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h1>Profile</h1>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Status:</strong> Active user</p>
        <p><strong>Access:</strong> JWT Protected</p>
        <p><strong>Theme:</strong> User controlled</p>
      </div>
    </div>
  );
};

export default Profile;