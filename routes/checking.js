const express = require("express");
const controller = require("../controllers/checking");
const router = express.Router();

router.get("/status-server", controller.checkingStatusServer);

module.exports = router;
