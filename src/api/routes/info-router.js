import express from "express";
import { fetchInfo, fetchOpeningHours } from "../controllers/info-controller.js";

const router = express.Router();


router.get("/", fetchInfo);
router.get("/:id/opening-hours", fetchOpeningHours);

export default router;
