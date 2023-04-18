import express from "express";
import passport from "passport";
import upload from "../middleware/upload.js";
import {
  getUserInfo,
  editUser,
  editPasswordUser,
  getHistoryUser,
  newHistoryUser,
  getFavoriteAndShoppingCart,
  getFavorite,
  addFavorite,
  removeFavorite,
  getWishList,
  patchWishList,
  getShoppingCart,
  addShoppingCart,
  removeShoppingCart,
  getShoppingCartList,
  patchShoppingCartList,
} from "../controllers/accountUser.js";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getUserInfo);
router.patch(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  editUser
);
router.patch(
  "/password/",
  passport.authenticate("jwt", { session: false }),
  editPasswordUser
);
router.get(
  "/history/",
  passport.authenticate("jwt", { session: false }),
  getHistoryUser
);
router.patch(
  "/history/",
  passport.authenticate("jwt", { session: false }),
  newHistoryUser
);
router.get(
  "/favorite_and_shoppingCart/",
  passport.authenticate("jwt", { session: false }),
  getFavoriteAndShoppingCart
);
router.get(
  "/favorite/",
  passport.authenticate("jwt", { session: false }),
  getFavorite
);
router.post(
  "/favorite/",
  passport.authenticate("jwt", { session: false }),
  addFavorite
);
router.delete(
  "/favorite/:id",
  passport.authenticate("jwt", { session: false }),
  removeFavorite
);
router.get(
  "/wish_list/",
  passport.authenticate("jwt", { session: false }),
  getWishList
);
router.patch(
  "/wish_list/",
  passport.authenticate("jwt", { session: false }),
  patchWishList
);
router.get(
  "/cart/",
  passport.authenticate("jwt", { session: false }),
  getShoppingCart
);
router.post(
  "/cart/",
  passport.authenticate("jwt", { session: false }),
  addShoppingCart
);
router.delete(
  "/cart/:id",
  passport.authenticate("jwt", { session: false }),
  removeShoppingCart
);
router.get(
  "/shopping_cart/",
  passport.authenticate("jwt", { session: false }),
  getShoppingCartList
);
router.patch(
  "/shopping_cart/",
  passport.authenticate("jwt", { session: false }),
  patchShoppingCartList
);

export default router;
