import express from "express";
import { getByIdSeller } from "../controllers/seller.js";

const router = express.Router();

router.get("/:id", getByIdSeller);

export default router;
