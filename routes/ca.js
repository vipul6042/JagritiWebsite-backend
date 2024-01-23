import express from "express";
const router = express.Router();
import {
  createCA,
  getCAByEmail,
  updateCAByEmail,
  deleteCAByEmail,
  getAllCA,
} from "../Controllers/ca.js";

router.post("/createCA", createCA);
router.get("/getCA", getCAByEmail);
router.patch("/updateCA", updateCAByEmail);
router.delete("/deleteCA", deleteCAByEmail);
router.get("/getAllCA", getAllCA);

export default router;
