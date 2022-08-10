const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/accountUser");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getUserInfo
);

router.patch(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.editUser
);

router.get(
  "/get/favorite",
  passport.authenticate("jwt", { session: false }),
  controller.getFavorite
);

router.post(
  "/add/favorite",
  passport.authenticate("jwt", { session: false }),
  controller.addFavorite
);

router.post(
  "/remove/favorite",
  passport.authenticate("jwt", { session: false }),
  controller.removeFavorite
);

module.exports = router;
