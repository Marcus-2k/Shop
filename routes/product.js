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
  controller.getByIdProduct
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
  controller.updateProduct
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
  controller.createProduct
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.deleteProduct
);

module.exports = router;
