import express from "express";
import {
  getByIdCard,
  getByIdCardInfo,
  getByIdCardCharacteristics,
  getByIdCardComments,
  getByIdCardQuestions,
  getByIdCardPhoto,
  getByIdCardAccessories,
} from "../controllers/card.js";

const router = express.Router();

router.get("/:id", getByIdCard);
router.get("/:id/info", getByIdCardInfo);
router.get("/:id/characteristics", getByIdCardCharacteristics);
router.get("/:id/comments", getByIdCardComments);
router.get("/:id/questions", getByIdCardQuestions);
router.get("/:id/photo", getByIdCardPhoto);
router.get("/:id/accessories", getByIdCardAccessories);

export default router;
