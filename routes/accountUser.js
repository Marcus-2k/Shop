const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/accountUser");
const router = express.Router();

// Get user account info

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getUserAccount
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.userUpInfo
);

module.exports = router;
