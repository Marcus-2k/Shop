import express from "express";
import { getCategory, getCharacteristics } from "../controllers/category.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/characteristics", getCharacteristics);

export default router;
