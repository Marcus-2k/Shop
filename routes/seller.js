const express = require("express");
const controller = require("../controllers/seller");
const router = express.Router();

router.get("/", controller.getSeller);
router.get("/:id", controller.getSellerById);

module.exports = router;
