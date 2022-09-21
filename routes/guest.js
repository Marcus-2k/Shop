const express = require("express");
const controller = require("../controllers/guest");
const router = express.Router();

router.get("/history/", controller.getHistoryGuest);

module.exports = router;
