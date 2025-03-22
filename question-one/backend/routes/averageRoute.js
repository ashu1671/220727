import express from "express";
const router = express.Router();
import { calculateAverage } from "../controllers/calculateAverage.js";

router.post("/average", calculateAverage);

export default router;
