import promisePool from "../../utils/database.js";

const listAllReservations = async () => {
  const [rows] = await promisePool.query("SELECT * FROM Reservation");
  console.log("rows", rows);
  return rows;
};

//Needs controller and a route
const findReservationById = async (id) => {
  /*const [rows] = await promisePool.execute(
    'SELECT * FROM Reservation WHERE id = ?',
    [id]
  );*/
  const sql = promisePool.format("SELECT * FROM Reservation WHERE id= ?", [id]);
  const [rows] = await promisePool.execute(sql);
  console.log("rows", rows);
  if (rows.length === 0) {
    return false;
  }
  return rows[0];
};

//Needs controller and a route
const findReservationByName = async (resName) => {
  const sql = promisePool.format(
    "SELECT * FROM Reservation WHERE reservation_name= ?",
    [resName]
  );
  const [rows] = await promisePool.execute(sql);
  console.log("rows", rows);
  if (rows.length === 0) {
    return false;
  }
  return rows[0];
};

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
  const sql = `INSERT INTO Reservation (person_id, restaurant_id, reservation_name,
   reservation_start, reservation_end, table_id, registered_user)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    person_id,
    restaurant_id,
    reservation_name,
    reservation_start,
    reservation_end,
    table_id,
    registered_user,
  ];
  const rows = await promisePool.execute(sql, params);
  console.log("rows", rows);
  if (rows[0].affectedRows === 0) {
    return false;
  }
  return { id: rows[0].insertId };
};

//If there is time
/*
const modifyReservation = async (reservation, id) => {
  const sql = promisePool.format(`UPDATE Reservation SET ? WHERE id = ?`, [
    cat,
    id,
  ]);
  const rows = await promisePool.execute(sql);
  console.log("rows", rows);
  if (rows[0].affectedRows === 0) {
    return false;
  }
  return { message: "success" };
};
*/

const removeReservation = async (id) => {
  const [rows] = await promisePool.execute(
    "DELETE FROM Reservation WHERE id = ?",
    [id]
  );
  console.log("rows", rows);
  if (rows.affectedRows === 0) {
    return false;
  }
  return { message: "success" };
};

export {
  listAllReservations,
  findReservationById,
  findReservationByName,
  addReservation,
  /*modifyReservation,*/
  removeReservation,
};
