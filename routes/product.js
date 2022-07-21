const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/product");
const router = express.Router();

// Get all product, for authorized users.
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAllUser
);

// Get by id product, for authorized users.
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getById
);

// Delete product, for authorized users.
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.delete
);

// Update product, for authorized users.
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.update
);

// Create product, for authorized users.
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.create
);

module.exports = router;
