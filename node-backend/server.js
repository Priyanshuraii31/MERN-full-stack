import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: "Signup successful",
    user: { name, email }
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Login successful",
    user: { email }
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});