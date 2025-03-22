import express from "express";
import { getPostsByType } from "../controller/postController.js";

const router = express.Router();
router.get("/", getPostsByType);
export default router;
