const express = require("express");
const controller = require("../controllers/seller");
const router = express.Router();

// Seller START =====================================================================================================================
router.get(
  "/:id",

  controller.getByIdSeller
);
// Seller END =======================================================================================================================

module.exports = router;
