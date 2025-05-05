import express from "express";
import userRouter from "./routes/user-router.js";
import menuRouter from "./routes/menu-router.js";
import reservationRouter from "./routes/reservation-router.js";
import dishRouter from './routes/dish-router.js';
import allergenRouter from './routes/allergen-router.js';
import infoRouter from './routes/info-router.js';

const router = express.Router();

// bind base url from user to userRouter
router.use("/users", userRouter);
router.use("/auth", userRouter); // + login

router.use("/menus", menuRouter);

router.use("/reserve", reservationRouter);

router.use('/dishes', dishRouter);

router.use("/allergens", allergenRouter);

router.use("/info", infoRouter);






export default router;
