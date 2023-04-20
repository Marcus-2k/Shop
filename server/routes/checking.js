import express from "express";
import { checkingStatusServer } from "../controllers/checking.js";

const router = express.Router();

router.get("/status-server", checkingStatusServer);

export default router;
