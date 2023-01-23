const express = require("express");
const controller = require("../controllers/search");
const router = express.Router();

router.post("/", controller.search);

module.exports = router;
