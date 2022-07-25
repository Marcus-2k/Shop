const express = require("express");
const controller = require("../controllers/category");
const router = express.Router();

router.get("/", controller.category);

module.exports = router;
