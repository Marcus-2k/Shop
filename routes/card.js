const express = require("express");
const controller = require("../controllers/card");
const router = express.Router();

router.get("/product/:id", controller.getByIdCard);

module.exports = router;
