import express from "express";
import userRouter from "./routes/user-router.js";
import menuRouter from "./routes/menu-router.js";
import reservationRouter from "./routes/reservation-router.js";

const router = express.Router();

// bind base url from user to userRouter
router.use("/users", userRouter);
router.use("/auth", userRouter); // + login

router.use("/menus", menuRouter);

router.use("/reserve", reservationRouter);

export default router;
