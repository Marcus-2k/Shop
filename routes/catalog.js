const express = require("express");
const controller = require("../controllers/catalog");
const router = express.Router();

router.get("/category/", controller.getCatalog);
router.get("/category/home", controller.getCatalogHome);
router.get("/:navigate_link", controller.getCatalogSection);

router.get("/category/characteristics", controller.getCategory);
router.post("/only-characteristics", controller.getCharacteristics);

module.exports = router;
