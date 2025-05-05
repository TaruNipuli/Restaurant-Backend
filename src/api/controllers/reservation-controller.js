import {
  listAllReservations,
  findReservationById,
  findReservationByName,
  addReservation,
  /*modifyReservation,*/
  removeReservation,
  findReservationFromUserId,
  addDishByReservation,
} from "../models/reservation-model.js";

//async-await might not be necessary
const getReservations = async (req, res) => {
  res.json(await listAllReservations());
};

const postReservation = async (req, res) => {
  const result = await addReservation(req.body);
  if (result.id) {
    res.status(201);
    res.json({ message: "New reservation added.", result });
  } else {
    res.sendStatus(400);
  }
};

const getReservationById = async (req, res) => {
  const reservation = await findReservationById(req.params.id);
  if (reservation) {
    res.json(reservation);
  } else {
    res.sendStatus(404);
  }
};

const getReservationByName = async (req, res) => {
  const reservation = await findReservationByName(req.params.reservation_name);
  if (reservation) {
    res.json(reservation);
  } else {
    res.sendStatus(404);
  }
};

//If there is time
/*
const putReservation = async (req, res) => {
  modifyReservation();
};
*/

const deleteReservation = async (req, res) => {
  const result = await removeReservation(req.params.id);
  if (result.message) {
    res.status(200);
    res.json({ message: "Reservation deleted", result });
  } else {
    res.status(404);
  }
};

const clearOldReservations = async () => {
  const reservations = await listAllReservations();
  console.log(reservations);
};

const getReservationByUserId = async (req, res) => {
  const reservation = await findReservationFromUserId(req.params.id);
  if (reservation) {
    res.json(reservation);
  } else {
    res.sendStatus(404);
  }
};

const postDish = async (req, res) => {
  const result = await addDishByReservation(req.body);
  if (result.id) {
    res.status(201);
    res.json({ message: "New dish added.", result });
  } else {
    res.sendStatus(400);
  }
};

export {
  getReservations,
  getReservationById,
  getReservationByName,
  postReservation,
  /*putReservation,*/ deleteReservation,
  clearOldReservations,
  getReservationByUserId,
  postDish,
};
