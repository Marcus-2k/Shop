import express from "express";
import {
  login,
  logout,
  register,
  checking,
  refresh,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/checking", checking);
router.get("/refresh", refresh);
router.get("/logout", logout);

export default router;
