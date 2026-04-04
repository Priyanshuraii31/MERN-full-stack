import React, { useEffect, useState } from "react";
import "./StatsSection.css";

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

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
          <CountUp end={100} suffix="%" />
          <p>Protected Routes</p>
        </div>

        <div className="stat-card">
          <CountUp end={24} suffix="/7" />
          <p>Authentication Access</p>
        </div>

        <div className="stat-card">
          <CountUp end={3} suffix="+" />
          <p>Core Security Features</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;