import express from "express";
import passport from "passport";
import { getOrdersUser, createOrder } from "../controllers/order.js";

const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getOrdersUser
);
router.post("/", passport.authenticate("jwt", { session: false }), createOrder);

export default router;
