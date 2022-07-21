const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/searchSite");
const router = express.Router();

// Get by search
// router.get("", controller.searchSite);
//
//
// http://localhost:5000/api/search
router.get("/:searchtext", controller.searchSite);

module.exports = router;
