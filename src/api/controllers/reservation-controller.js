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

const getReservations = async (req, res) => {
  try {
    const reservations = await listAllReservations();
    res.json(reservations);
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const postReservation = async (req, res) => {
  try {
    const result = await addReservation(req.body);
    if (result.id) {
      res.status(201).json({ message: "New reservation added.", result });
    } else {
      res.status(400).json({ message: "Failed to add reservation." });
    }
  } catch (error) {
    console.error("Error adding reservation:", error);
    res.status(500).json({ message: "Internal server error" });
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

// If there is time
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

// addDishByReservation() returns { reservation_id, dish_id } and not an 'id' field, so result is enough
const postDish = async (req, res) => {
  try {
    const result = await addDishByReservation(req.body);
    if (result) {
      res.status(201).json({ message: "New dish added.", result });
    } else {
      res.status(400).json({ message: "Failed to add dish." });
    }
  } catch (error) {
    console.error("Error adding dish:", error);
    res.status(500).json({ message: "Internal server error" });
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
