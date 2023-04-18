import express from "express";
import { search } from "../controllers/search.js";

const router = express.Router();

router.get("/", search);
router.get("/:navigate_link", search);

export default router;
