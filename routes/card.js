const express = require("express");
const controller = require("../controllers/card");
const router = express.Router();

router.get("/:id", controller.getByIdCard);
router.get("/:id/info", controller.getByIdCardInfo);
router.get("/:id/characteristics", controller.getByIdCardCharacteristics);
router.get("/:id/comments", controller.getByIdCardComments);
router.get("/:id/questions", controller.getByIdCardQuestions);
router.get("/:id/photo", controller.getByIdCardPhoto);
router.get("/:id/accessories", controller.getByIdCardAccessories);

module.exports = router;
