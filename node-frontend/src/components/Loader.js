import React from "react";
import { FaSpinner } from "react-icons/fa";
import "./Loader.css";

const Loader = ({ text = "Please wait..." }) => {
  return (
    <div className="loader-wrapper">
      <FaSpinner className="loader-icon" />
      <p>{text}</p>
    </div>
  );
};

export default Loader;