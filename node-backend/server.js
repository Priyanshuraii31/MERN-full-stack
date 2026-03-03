require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("ENV VALUE:", process.env.MONGO_URL);

// ✅ Simple connect (no extra options)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Connection Error ❌:", err));

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.use("/api", userRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});