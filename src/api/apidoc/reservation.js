/**
 * @api {get} /reserve Get All Reservations
 * @apiName GetReservations
 * @apiGroup Reservation
 *
 * @apiSuccess {Object[]} reservations List of all reservations.
 * @apiSuccessExample {json} Success-Response:
 * [
 *   {
 *      "id": 1,
 *      "person_id": 2
 *      "restaurant_id": 1,
 *      "reservation_name": "John Doe Table Reservation",
 *      "reservation_start": "2025-01-01 00:00",
 *      "reservation_end": "2025-01-01 01:00"
 *      "table_id": 1
 *      "registered_user": 1
 *   }
 *     ...
 * ]
 *
 * @apiError (500) InternalServerError Error fetching reservations.
 */

/**
 * @api {post} /reserve Create a Reservation
 * @apiName PostReservation
 * @apiGroup Reservation
 *
 * @apiBody {Number} user_id ID of the user making the reservation.
 * @apiBody {Number} restaurant_id ID of the restaurant reservation is made to.
 * @apiBody {String} reservation_name Name of the reservation.
 * @apiBody {String} reservation_start Starting date and time of the reservation
 * @apiBody {String} reservation_end Ending date and time of the reservation
 * @apiBody {Number} table_id ID of the reserved table
 * @apiBody {Number} registered_user Numeric indicator whether reservation is for a registered user
 *
 * @apiSuccess (200) New reservation added
 * @apiError (500) InternalServerError Error creating reservation.
 */

/**
 * @api {get} /reserve/:id Get Reservation by ID
 * @apiName GetReservationById
 * @apiGroup Reservation
 *
 * @apiParam {Number} id Reservation unique ID.
 *
 * @apiSuccess {Object} reservation Reservation object.
 * @apiError (404) NotFound Reservation not found.
 */

/**
 * @api {delete} /reserve/:id Delete Reservation by ID
 * @apiName DeleteReservation
 * @apiGroup Reservation
 *
 * @apiParam {Number} id Reservation unique ID.
 *
 * @apiSuccess (200) Reservation deleted.
 * @apiError (404) Reservation not found.
 */

/**
 * @api {get} /reserve/user/:id Get Reservations by User ID
 * @apiName GetReservationByUserId
 * @apiGroup Reservation
 *
 * @apiParam {Number} id User ID.
 *
 * @apiSuccess {Object[]} reservations List of reservations for the user.
 * @apiError (404) NotFound No reservations for the given user.
 */

/**
 * @api {post} /reserve/dish Add Dish to Reservation
 * @apiName PostDish
 * @apiGroup Reservation
 *
 * @apiBody {Number} reservation_id Reservation ID.
 * @apiBody {Number} dish_id Dish ID.
 *
 * @apiSuccess (200) New dish added.
 * @apiError (500) Internal server error
 */
