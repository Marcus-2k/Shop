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

// ==== Favorite ====================================================================================================
router.get(
  "/favorite/",
  passport.authenticate("jwt", { session: false }),
  controller.getFavorite
);
router.post(
  "/favorite/",
  passport.authenticate("jwt", { session: false }),
  controller.addFavorite
);
router.delete(
  "/favorite/:id",
  passport.authenticate("jwt", { session: false }),
  controller.removeFavorite
);
router.get(
  "/wish_list/",
  passport.authenticate("jwt", { session: false }),
  controller.getWishList
);
router.patch(
  "/wish_list/",
  passport.authenticate("jwt", { session: false }),
  controller.patchWishList
);
// ==== Favorite ====================================================================================================
// Shopping Cart ====================================================================================================
router.get(
  "/cart/",
  passport.authenticate("jwt", { session: false }),
  controller.getShoppingCart
);
router.post(
  "/cart/",
  passport.authenticate("jwt", { session: false }),
  controller.addShoppingCart
);
router.delete(
  "/cart/:id",
  passport.authenticate("jwt", { session: false }),
  controller.removeShoppingCart
);
router.get(
  "/shopping_cart/",
  passport.authenticate("jwt", { session: false }),
  controller.getShoppingCartList
);
router.patch(
  "/shopping_cart/",
  passport.authenticate("jwt", { session: false }),
  controller.patchShoppingCartList
);
// Shopping Cart ====================================================================================================

module.exports = router;
