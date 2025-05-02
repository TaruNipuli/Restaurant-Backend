import {
  listAllReservations,
  addReservation,
  /*modifyReservation,*/
  removeReservation,
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

export {
  getReservations,
  postReservation,
  /*putReservation,*/ deleteReservation,
  clearOldReservations,
};
