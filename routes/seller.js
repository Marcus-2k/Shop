import express from "express";
import { getByIdSeller } from "../controllers/seller.js";

const router = express.Router();

// Seller START =====================================================================================================================
router.get(
  "/:id",

  getByIdSeller
);
// Seller END =======================================================================================================================

export default router;
