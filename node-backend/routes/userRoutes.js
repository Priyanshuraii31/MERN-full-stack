import express from "express";

const router = express.Router();

import { registerUser, loginUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected profile route",
    user: req.user
  });
});

export default router;