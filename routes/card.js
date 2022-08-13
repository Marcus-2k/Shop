const express = require("express");
const controller = require("../controllers/card");
const router = express.Router();

router.get("/:id", controller.getByIdCard);
router.get("/info/:id", controller.getByIdCardInfo);
router.get("/characteristics/:id", controller.getByIdCardCharacteristics);
router.get("/comments/:id", controller.getByIdCardComments);
router.get("/questions/:id", controller.getByIdCardQuestions);
router.get("/photo/:id", controller.getByIdCardPhoto);
router.get("/accessories/:id", controller.getByIdCardAccessories);

module.exports = router;
