const express = require("express");
const controller = require("../controllers/news");
const router = express.Router();

// News START =====================================================================================================================
router.get(
  "/",

  controller.getAllNews
);
// News END =======================================================================================================================

module.exports = router;
