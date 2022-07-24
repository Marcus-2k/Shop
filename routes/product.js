const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/product");
const router = express.Router();

// Get all product
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAllProduct
);

// Get by id product
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getById
);

// Update product
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.update
);

// Delete product
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.delete
);

module.exports = router;
