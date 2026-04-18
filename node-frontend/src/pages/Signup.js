import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      return "Strong";
    }
    return "Medium";
  };

  const strength = getPasswordStrength(form.password);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post(
        "https://mern-full-stack-prcf.onrender.com/api/signup",
        {
          name: form.name,
          email: form.email,
          password: form.password
        }
      );

      toast.success("Signup successful");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-layout">
        <div className="auth-left">
          <h1>Create Account</h1>
          <p>
            Join a secure authentication platform with protected routes,
            session handling, dark mode, and a modern portfolio-ready design.
          </p>

          <div className="auth-highlights">
            <div className="auth-highlight">Secure Signup Flow</div>
            <div className="auth-highlight">Password Validation</div>
            <div className="auth-highlight">Modern Responsive Experience</div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h2>Signup</h2>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && <small className="error-text">{errors.name}</small>}

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && <small className="error-text">{errors.email}</small>}

              <div className="password-box">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <small className={`strength-text ${strength.toLowerCase()}`}>
                Password Strength: {strength}
              </small>

              {errors.password && (
                <small className="error-text">{errors.password}</small>
              )}

              <div className="password-box">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.confirmPassword && (
                <small className="error-text">{errors.confirmPassword}</small>
              )}

              <button type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Signup"}
              </button>
            </form>

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;