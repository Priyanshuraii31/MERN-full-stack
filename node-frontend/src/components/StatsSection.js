import React, { useEffect, useState } from "react";
import { FaShieldAlt, FaUserCheck, FaMoon } from "react-icons/fa";
import "./StatsSection.css";

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    
    const step = Math.ceil(end / 40);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h3>
      {count}
      {suffix}
    </h3>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-card">
          <FaShieldAlt className="stat-icon" />
          <CountUp end={100} suffix="%" />
          <p>Protected Routes</p>
        </div>

        <div className="stat-card">
          <FaUserCheck className="stat-icon" />
          <CountUp end={24} suffix="/7" />
          <p>Secure Access</p>
        </div>

        <div className="stat-card">
          <FaMoon className="stat-icon" />
          <CountUp end={3} suffix="+" />
          <p>Premium Features</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;