import express from "express";
import { getTopUsers } from "../controller/userController.js";

const router = express.Router();
router.get("/", getTopUsers);
export default router;
