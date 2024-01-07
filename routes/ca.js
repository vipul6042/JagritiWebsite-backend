import express from "express";
const router = express.Router();
import { createCA,getCAById,updateCA,deleteCA } from "../Controllers/ca.js";

router.post("/createCA", createCA);
router.get("/getCA", getCAById);
router.patch("/updateCA", updateCA);
router.delete("/deleteCA", deleteCA);

export default router;