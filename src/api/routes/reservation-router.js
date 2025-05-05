import express from "express";
import {
  deleteReservation,
  getReservationById,
  getReservationByName,
  getReservations,
  postReservation,
  getReservationByUserId,
  postDish,
} from "../controllers/reservation-controller.js";

const reservationRouter = express.Router();

//reservationRouter.route("/reserve").post(postReservation);

reservationRouter.route("/").get(getReservations).post(postReservation);
reservationRouter
  .route("/:id")
  .delete(deleteReservation)
  .get(getReservationById);
reservationRouter.route("/:reservation_name").get(getReservationByName);
reservationRouter.route("/user/:id").get(getReservationByUserId);
reservationRouter.route("/dish").post(postDish);

export default reservationRouter;
