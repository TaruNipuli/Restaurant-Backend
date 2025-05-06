import promisePool from "../../utils/database.js";

// List all reservations
const listAllReservations = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Reservation");
    console.log("rows", rows);
    return rows;
  } catch (error) {
    console.error('Error listing all reservations:', error);
    throw error;
  }
};

// Find reservation by ID
const findReservationById = async (id) => {
  try {
    const sql = promisePool.format("SELECT * FROM Reservation WHERE id = ?", [id]);
    const [rows] = await promisePool.execute(sql);
    console.log("rows", rows);
    if (rows.length === 0) {
      return false;
    }
    return rows[0];
  } catch (error) {
    console.error(`Error finding reservation by ID ${id}:`, error);
    throw error;
  }
};

// Find reservation by Name
const findReservationByName = async (resName) => {
  try {
    const sql = promisePool.format("SELECT * FROM Reservation WHERE reservation_name = ?", [resName]);
    const [rows] = await promisePool.execute(sql);
    console.log("rows", rows);
    if (rows.length === 0) {
      return false;
    }
    return rows[0];
  } catch (error) {
    console.error(`Error finding reservation by name ${resName}:`, error);
    throw error;
  }
};

// Add a reservation
const addReservation = async (reservation) => {
  const {
    person_id,
    restaurant_id,
    reservation_name,
    reservation_start,
    reservation_end,
    table_id,
    registered_user,
  } = reservation;

  try {
    const sql = `INSERT INTO Reservation (person_id, restaurant_id, reservation_name, reservation_start, reservation_end, table_id, registered_user) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [person_id, restaurant_id, reservation_name, reservation_start, reservation_end, table_id, registered_user];
    const [rows] = await promisePool.execute(sql, params);
    console.log("rows", rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
    return { id: rows[0].insertId };
  } catch (error) {
    console.error('Error adding reservation:', error);
    throw error;
  }
};

// Remove reservation
const removeReservation = async (id) => {
  try {
    const [rows] = await promisePool.execute("DELETE FROM Reservation WHERE id = ?", [id]);
    console.log("rows", rows);
    if (rows.affectedRows === 0) {
      return false;
    }
    return { message: "success" };
  } catch (error) {
    console.error(`Error removing reservation with ID ${id}:`, error);
    throw error;
  }
};

// Find reservations from User ID
const findReservationFromUserId = async (id) => {
  try {
    const sql = promisePool.format("SELECT * FROM Reservation JOIN User ON Reservation.person_id = User.id WHERE person_id = ?", [id]);
    const [rows] = await promisePool.execute(sql);
    console.log("rows", rows);
    if (rows.length === 0) {
      return false;
    }
    return rows;
  } catch (error) {
    console.error(`Error finding reservations for user ${id}:`, error);
    throw error;
  }
};

// Add dish to reservation
// Add dish to reservation
const addDishByReservation = async ({ reservation_id, dish_id }) => {
  try {
    // Check if reservation exists first
    const reservation = await findReservationById(reservation_id);
    if (!reservation) {
      return { error: "Reservation not found" };
    }

    // Insert the dish into Selected_dishes
    await promisePool.execute("INSERT INTO Selected_dishes (reservation_id, dish_id) VALUES (?, ?)", [reservation_id, dish_id]);

    return { reservation_id, dish_id };
  } catch (error) {
    console.error('Error adding dish to reservation:', error);
    throw error;
  }
};
export {
  listAllReservations,
  findReservationById,
  findReservationByName,
  addReservation,
  removeReservation,
  findReservationFromUserId,
  addDishByReservation,
};
