import React, { useState } from "react";
import { FaUser, FaEnvelope, FaSave } from "react-icons/fa";
import { getUserEmail } from "../utils/auth";
import "./Profile.css";

const Profile = () => {
  const emailFromToken = getUserEmail();

  const [form, setForm] = useState({
    name: "Priyanshu",
    email: emailFromToken || "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
  };

  const getInitial = () => {
    return form.email ? form.email.charAt(0).toUpperCase() : "U";
  };

  return (
    <div className="profile">
      <div className="profile-container">

        <div className="profile-header premium-card">
          <div className="avatar">{getInitial()}</div>
          <h2>{form.name}</h2>
          <p>{form.email}</p>
        </div>

        <div className="profile-grid">

          <div className="profile-card premium-card">
            <h3>Edit Profile</h3>

            <div className="input-group">
              <FaUser />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>

            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>

            <button className="save-btn" onClick={handleSave}>
              <FaSave /> Save Changes
            </button>

            {saved && <p className="success-text">Profile updated (UI only)</p>}
          </div>

          <div className="profile-card premium-card">
            <h3>Account Settings</h3>

            <div className="setting-row">
              <span>Account Status</span>
              <strong>Active</strong>
            </div>

            <div className="setting-row">
              <span>Security</span>
              <strong>JWT Enabled</strong>
            </div>

            <div className="setting-row">
              <span>Theme</span>
              <strong>Dynamic</strong>
            </div>

            <div className="setting-row">
              <span>Access</span>
              <strong>Protected Routes</strong>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;