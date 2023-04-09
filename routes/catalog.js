const express = require("express");
const controller = require("../controllers/catalog");
const router = express.Router();

router.get("/", controller.getCatalog);
router.get("/home", controller.getCatalogHome);
router.get("/:navigate_link", controller.getCatalogSection);

module.exports = router;
