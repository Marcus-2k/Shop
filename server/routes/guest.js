import express from "express";
import { getHistoryGuest } from "../controllers/guest.js";

const router = express.Router();

router.get("/history/", getHistoryGuest);

export default router;
