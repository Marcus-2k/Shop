const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/product");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAllProduct
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getById
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.update
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.create
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.delete
);

module.exports = router;
