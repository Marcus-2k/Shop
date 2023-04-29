import express from "express";
import { getHistoryGuest, getGuestCart } from "../controllers/guest.js";

const router = express.Router();

router.get("/history/", getHistoryGuest);
router.get("/cart", getGuestCart);

export default router;
