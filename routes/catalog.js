import express from "express";
import {
  getCatalog,
  getCatalogHome,
  getCatalogSection,
} from "../controllers/catalog.js";

const router = express.Router();

router.get("/", getCatalog);
router.get("/home", getCatalogHome);
router.get("/:navigate_link", getCatalogSection);

export default router;
