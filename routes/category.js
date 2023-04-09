const express = require("express");
const controller = require("../controllers/category");
const router = express.Router();

router.get("/", controller.getCategory);
router.post("/characteristics", controller.getCharacteristics);

module.exports = router;
