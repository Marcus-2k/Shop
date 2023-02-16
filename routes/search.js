const express = require("express");
const controller = require("../controllers/search");
const router = express.Router();

router.get("/", controller.search);
router.get("/:navigate_link", controller.search);

module.exports = router;
