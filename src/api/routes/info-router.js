import express from "express";
import { fetchInfo, fetchOpeningHours } from "../controllers/info-controller.js";

const router = express.Router();

// Reitti ravintolan tiedoille
router.get("/restaurant", fetchInfo);  // Huom: "/restaurant"

// Reitti aukioloajoille (id parametri)
router.get("/restaurant/:id/opening-hours", fetchOpeningHours);  // Huom: "/restaurant/:id/opening-hours"

export default router;
