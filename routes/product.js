import express from "express";
import passport from "passport";
import upload from "../middleware/upload.js";
import {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllProduct
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getByIdProduct
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.fields([
    { name: "image-0" },
    { name: "image-1" },
    { name: "image-2" },
    { name: "image-3" },
    { name: "image-4" },
    { name: "image-5" },
    { name: "image-6" },
    { name: "image-7" },
  ]),
  updateProduct
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.fields([
    { name: "image-0" },
    { name: "image-1" },
    { name: "image-2" },
    { name: "image-3" },
    { name: "image-4" },
    { name: "image-5" },
    { name: "image-6" },
    { name: "image-7" },
  ]),
  createProduct
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteProduct
);

export default router;
