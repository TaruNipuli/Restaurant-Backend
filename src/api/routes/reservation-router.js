import express from "express";
import {
  deleteReservation,
  getReservations,
  postReservation,
} from "../controllers/reservation-controller.js";

const reservationRouter = express.Router();

//reservationRouter.route("/reserve").post(postReservation);

reservationRouter.route("/").get(getReservations).post(postReservation);
reservationRouter.route("/:id").delete(deleteReservation);

export default reservationRouter;
