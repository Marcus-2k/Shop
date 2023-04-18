import express from "express";
import { getAllNews } from "../controllers/news.js";

const router = express.Router();

router.get("/", getAllNews);

export default router;
