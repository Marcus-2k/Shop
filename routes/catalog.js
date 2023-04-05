const express = require("express");
const controller = require("../controllers/catalog");
const router = express.Router();

router.get("/category/", controller.getCategory);
router.get("/category/home", controller.getCategoryHome);
router.get(
  "/category/characteristics",
  controller.getCategoryAndCharacteristics
);
router.post("/only-characteristics", controller.getCharacteristics);
router.get("/:navigate_link", controller.getCatalogSection);

module.exports = router;
